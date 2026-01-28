import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {
  requestIdMiddleware,
  securityMiddleware,
} from "./common/middlewares/security.middleware.js";
import { errorMiddleware } from "./common/utils/error.utils.js";
import { cacheRateLimitMiddleware } from "./common/middlewares/node.cache.middlewares.js";
import LoyaltyRouter from "./modules/loyalty/routes/loyalty.routes.js";
import OfferRouter from "./modules/offer/routes/offer.routes.js";


const app = express();

app.use(cors());
//console.log('🔒 CORS configured with allowed origins:', allowedOrigins);

securityMiddleware(app);
app.use(requestIdMiddleware);

// app.use(authenticateToken);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Global Rate Limiter: 1000 requests capacity, refilling at 100 tokens/sec
app.use(cacheRateLimitMiddleware(1000, 100));

// Routes declaration

app.use(process.env.API_URL, LoyaltyRouter);
app.use(process.env.API_URL, OfferRouter);


app.use((error, req, res, next) => {
  if (error.message === 'Not allowed by CORS policy') {
    return res.status(403).json({
      error: 'Access Forbidden',
      message: 'Your origin is not allowed by CORS policy',
      code: 'CORS_POLICY_VIOLATION',
      origin: req.headers.origin
    });
  }
  if (error.message === 'Origin header required') {
    return res.status(403).json({
      error: 'Origin Required',
      message: 'Origin header is required for this API',
      code: 'ORIGIN_HEADER_REQUIRED'
    });
  }
  next(error);
});

app.use(errorMiddleware);

export { app };