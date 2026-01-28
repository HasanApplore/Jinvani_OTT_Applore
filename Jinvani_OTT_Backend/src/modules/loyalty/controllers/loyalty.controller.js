import { Loyalty } from "../models/loyalty.models.js";
import { ApiError } from "../../../common/utils/ApiError.js";
import { asyncHandler } from "../../../common/utils/asyncHandler.js";

export const getLoyaltyByCustomerIdHandler = asyncHandler(async (req, res) => {
  const { customer_id } = req.params;

  if (!customer_id) {
    throw new ApiError(400, "Customer ID is required!", {
      reason: "Customer ID parameter is missing",
    });
  }

  const loyalty = await Loyalty.findOne({ customer_id }).lean();

  if (!loyalty) {
    throw new ApiError(404, "Loyalty record not found!", {
      reason: "No loyalty record exists for this customer",
    });
  }

  res.status(200).json({
    customer_id: loyalty.customer_id,
    points_balance: loyalty.points_balance,
    tier: loyalty.tier,
  });
});



