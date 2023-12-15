const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const checkManager = require("../middleware/checkManager");

router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);
router.post("/add", checkManager, addProduct);
router.put("/update/:id", checkManager, updateProduct);
router.delete("/delete/:id", checkManager, deleteProduct);

module.exports = router;
