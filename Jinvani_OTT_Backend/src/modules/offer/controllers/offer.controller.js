import { Offer } from "../models/offer.models.js";
import { ApiError } from "../../../common/utils/ApiError.js";
import { asyncHandler } from "../../../common/utils/asyncHandler.js";

export const getOffersByCityHandler = asyncHandler(async (req, res) => {
  const { city } = req.query;

  const query = {
    status: "ACTIVE",
    valid_till: { $gte: new Date() },
  };

  if (city) {
    query.city = city;
  }

  const offers = await Offer.find(query)
    .select("offer_id title valid_till")
    .lean();

  res.status(200).json({
    offers: offers.map((offer) => ({
      offer_id: offer.offer_id,
      title: offer.title,
      valid_till: offer.valid_till.toISOString().split("T")[0],
    })),
  });
});

