const asyncErrorWrapper = require("../middleware/catchAsyncErrors");
const Product = require("../models/productSchema");
const ErrorHandler = require("../utils/errohandler");

const getAllProducts = asyncErrorWrapper(async (req, res) => {
  // empty object means no filter and get all the products
  const products = await Product.find({});
  res.status(200).json({ products: products });
});

const createProducts = asyncErrorWrapper(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(200).json({ product });
});

const updateProducts = asyncErrorWrapper(async (req, res, next) => {
  //  Destructuring req.params = {}
  const { id: productID } = req.params;
  const product = await Product.findOneAndUpdate({ _id: productID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({ product });
});

const deleteProducts = asyncErrorWrapper(async (req, res, next) => {
  const { id: productID } = req.params;
  const product = await Product.findOneAndDelete({ _id: productID });

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({ product });
});

module.exports = {
  getAllProducts,
  createProducts,
  updateProducts,
  deleteProducts,
};
