const mongoose = require("mongoose");

const OfferSchema = new mongoose.Schema(
  {
    investor: { type: String, required: true },
    amount: { type: Number, required: true },
    equity: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const OfferModel = mongoose.model("offers", OfferSchema);

module.exports = OfferModel