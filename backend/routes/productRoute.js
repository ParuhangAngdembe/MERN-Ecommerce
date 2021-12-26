const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProducts,
  updateProducts,
  deleteProducts,
} = require("../controllers/productController");
const { isUserAuthenticated, authorizedRoles } = require("../middleware/auth");

// Route!!!
router.route("/").get(isUserAuthenticated, getAllProducts);
// router.route("/product/:id").get(getProductDetails);

router
  .route("/admin/product/new")
  .post(isUserAuthenticated, authorizedRoles("admin"), createProducts);

router
  .route("/admin/product/:id")
  .put(isUserAuthenticated, authorizedRoles("admin"), updateProducts)
  .delete(isUserAuthenticated, authorizedRoles("admin"), deleteProducts);

module.exports = router;
