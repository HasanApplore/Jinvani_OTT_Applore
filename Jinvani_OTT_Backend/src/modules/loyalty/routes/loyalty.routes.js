import { Router } from "express";
import { applyMethodRateLimits } from "../../../common/middlewares/node.cache.middlewares.js";
import { getLoyaltyByCustomerIdHandler } from "../controllers/loyalty.controller.js";

const LoyaltyRouter = Router();

const LoyaltyRateLimits = {
  GET: { capacity: 5000, refillRate: 500 },
};

applyMethodRateLimits(LoyaltyRouter, "/loyalty/:customer_id", LoyaltyRateLimits);

// Define routes
LoyaltyRouter.route("/loyalty/:customer_id").get(getLoyaltyByCustomerIdHandler);

export default LoyaltyRouter;
