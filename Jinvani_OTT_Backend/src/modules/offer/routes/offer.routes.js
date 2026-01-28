import { Router } from "express";
import { applyMethodRateLimits } from "../../../common/middlewares/node.cache.middlewares.js";
import { getOffersByCityHandler } from "../controllers/offer.controller.js";

const OfferRouter = Router();

const OfferRateLimits = {
  GET: { capacity: 5000, refillRate: 500 },
};

applyMethodRateLimits(OfferRouter, "/offers", OfferRateLimits);

// Define routes
OfferRouter.route("/offers").get(getOffersByCityHandler);

export default OfferRouter;
