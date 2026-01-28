import mongoose from "mongoose";
const { Schema } = mongoose;

const OfferSchema = new Schema(
  {
    offer_id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    valid_till: {
      type: Date,
      required: true,
    },
    city: {
      type: String,
      trim: true,
      index: true,
    },
    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE", "EXPIRED"],
      default: "ACTIVE",
    },
  },
  {
    timestamps: true,
  }
);

export const Offer = mongoose.model("Offer", OfferSchema);

