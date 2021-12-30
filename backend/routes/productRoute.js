const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductDetails,
  createProducts,
  updateProducts,
  deleteProducts,
  createProductReview,
  deleteReview,
} = require("../controllers/productController");
const { isUserAuthenticated, authorizedRoles } = require("../middleware/auth");

// Route!!!
router.route("/").get(getAllProducts);
router.route("/product/details/:id").get(getProductDetails);

router
  .route("/admin/product/new")
  .post(isUserAuthenticated, authorizedRoles("admin"), createProducts);

router
  .route("/admin/product/:id")
  .put(isUserAuthenticated, authorizedRoles("admin"), updateProducts)
  .delete(isUserAuthenticated, authorizedRoles("admin"), deleteProducts);

router.route("/review").put(isUserAuthenticated, createProductReview);

router.route("/reviews").delete(isUserAuthenticated, deleteReview);

module.exports = router;
