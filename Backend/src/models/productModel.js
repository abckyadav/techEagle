const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  productImageUrl: { type: String, required: true },
  productDescription: { type: String, required: true },
  productWeight: { type: Number },
  productQuantity: { type: Number },
  productPrice: { type: Number },
});

module.exports = mongoose.model("Product", productSchema);
