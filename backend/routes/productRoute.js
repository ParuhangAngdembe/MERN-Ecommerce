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
router
  .route("/")
  .get(isUserAuthenticated, getAllProducts)
  .post(isUserAuthenticated, authorizedRoles("admin"), createProducts);

router
  .route("/:id")
  .put(isUserAuthenticated, authorizedRoles("admin"), updateProducts)
  .delete(isUserAuthenticated, authorizedRoles("admin"), deleteProducts);

module.exports = router;
