import mongoose from "mongoose";
const { Schema } = mongoose;

const LoyaltySchema = new Schema(
  {
    customer_id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    points_balance: {
      type: Number,
      required: true,
      default: 0,
      min: 0,
    },
    tier: {
      type: String,
      required: true,
      enum: ["Bronze", "Silver", "Gold", "Platinum"],
      default: "Bronze",
    },
  },
  {
    timestamps: true,
  }
);

export const Loyalty = mongoose.model("Loyalty", LoyaltySchema);

