import { ApiError } from "./ApiError.js";
const errorMiddleware = (err, req, res, next) => {
  let error = err;

  // Fix: Ensure we are working with an ApiError instance or similar structure
  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode || 500;
    const message = error.message || "Internal Server Error";
    error = new ApiError(statusCode, message, {
      reason: error.name || "Unknown Error",
    });
  }

  // Mongoose: Bad ObjectId
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    error = new ApiError(400, message, {
      reason: "Invalid ID format",
      solution: "Provide a valid MongoDB ObjectId",
    });
  }

  // Mongoose: Duplicate Key
  if (err.code === 11000) {
    const message = `Duplicate field value entered`;
    error = new ApiError(409, message, {
      reason: "Unique constraint violation",
      metadata: err.keyValue,
      solution: "Register with unique credentials",
    });
  }

  // Mongoose: Validation Error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
    error = new ApiError(422, message, {
      reason: "Schema validation failed",
      solution: "Check specific field requirements",
    });
  }

  // JWT: Invalid Token
  if (err.name === "JsonWebTokenError") {
    error = new ApiError(401, "Invalid token. Please login again.", {
      reason: "Token signature verification failed",
    });
  }

  // JWT: Expired Token
  if (err.name === "TokenExpiredError") {
    error = new ApiError(401, "Token expired. Please login again.", {
      reason: "Token lifetime exceeded",
    });
  }

  const response = {
    success: false,
    statusCode: error.statusCode,
    message: error.message,
    error: {
      type: error.error.type,
      reason: error.error.reason,
      solution: error.error.solution,
      timestamp: error.error.timestamp,
      ...(process.env.NODE_ENV === "development" && {
        // Only show metadata in development if needed, but remove stack as requested
        metadata: error.error.metadata 
      }),
    },
  };

  res.status(error.statusCode).json(response);
};
export { errorMiddleware };
