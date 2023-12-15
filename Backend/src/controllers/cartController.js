const CartModel = require("../models/cartModel");

const getAllCartItems = async (req, res) => {
  try {
    const userId = req.body.userId;
    const cart = await CartModel.findOne({ userId }).populate({
      path: "items.productId",
      select: "-quantity",
    });
    return res.status(200).json({ msg: "success", cart });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Error in getAllCartItems", error: error.message });
  }
};

const addItemsToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const existingCartItem = await CartModel.findOne({
      userId,
      "items.productId": productId,
    });
    if (existingCartItem) {
      return res.status(400).json({ error: "Product is already in the cart" });
    } else {
      const cart = await CartModel.findOneAndUpdate(
        { userId },
        { $addToSet: { items: { productId, quantity } } },
        { upsert: true, new: true }
      );
      return res.status(200).json({ msg: "Product Added Successfully", cart });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Error in addItemsToCart", error: error.message });
  }
};

const updateCartItem = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const { quantity } = req.body;
    const cart = await CartModel.findOneAndUpdate(
      { userId, "items.productId": productId },
      { $set: { "items.$.quantity": quantity } },
      { new: true }
    );
    res.status(200).json({ msg: "Quantity Updated Successfully!", cart });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Error in updateCartItem", error: error.message });
  }
};

const removeItemsFromCart = async (req, res) => {
  try {
    const id = req.params.id;
    const { userId } = req.body;
    const cart = await CartModel.findOneAndUpdate(
      { userId },
      { $pull: { items: { _id: id } } },
      { new: true }
    );
    res.status(200).json({ message: "Product removed from cart" });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Error in removeItemsFromCart", error: error.message });
  }
};

module.exports = {
  getAllCartItems,
  addItemsToCart,
  updateCartItem,
  removeItemsFromCart,
};
