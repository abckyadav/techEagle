const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userId: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },
  items: [
    {
      productId: {
        ref: "Product",
        type: mongoose.Schema.Types.ObjectId,
      },
      quantity: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model("Cart", cartSchema);
