const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  createProducts,
  updateProducts,
  deleteProducts,
} = require("../controllers/productController");

router.route("/").get(getAllProducts).post(createProducts);
router.route("/:id").put(updateProducts).delete(deleteProducts);

module.exports = router;
