const ProductModel = require("../models/productModel");

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await ProductModel.find();
    return res.status(200).json({ msg: "success", allProducts });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Error in getAllProducts", error: error.message });
  }
};

const getSingleProduct = async (req, res) => {
  const productID = req.params.id;

  try {
    const singleProduct = await ProductModel.find({ _id: productID });
    return res.status(200).json({ msg: "success", singleProduct });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Error in singleProduct", error: error.message });
  }
};

const addProduct = async (req, res) => {
  try {
    const product = new ProductModel(req.body);
    await product.save();
    return res.status(200).json({ msg: "Product added successfully", product });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Error in addProduct", error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const productID = req.params.id;

  try {
    const product = await ProductModel.findByIdAndUpdate(
      { _id: productID }, // Filter: Find a document with the specified _id
      req.body, // Update: Update the document with the data from req.body
      { new: true } // Options: Return the modified document rather than the original
    );
    return res
      .status(200)
      .json({ msg: "Product updated successfully", product });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Error in addProduct", error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const productID = req.params.id;

  try {
    const product = await ProductModel.findByIdAndDelete({ _id: productID });
    return res
      .status(200)
      .json({ msg: "Product deleted successfully", product });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Error in addProduct", error: error.message });
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
