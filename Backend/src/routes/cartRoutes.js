const express = require("express");
const router = express.Router();
const authorisation = require("../middleware/authorisation");
const {
  getAllCartItems,
  addItemsToCart,
  updateCartItem,
  removeItemsFromCart,
} = require("../controllers/cartController");

router.get("/", authorisation, getAllCartItems);
router.post("/add", authorisation, addItemsToCart);
router.put("/update", authorisation, updateCartItem);
router.delete("/delete/:id", authorisation, removeItemsFromCart);

module.exports = router;
