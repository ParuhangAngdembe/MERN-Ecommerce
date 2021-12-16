const ErrorHandler = require("../utils/errohandler");
const jwt = require("jsonwebtoken");
const user = require("../models/userModel");

const isUserAuthenticated = async (req, res, next) => {
  // cookie-parser parses Cookie header and populates req.cookies with an object keyed by the cookie names.
  const { token } = req.cookies;
  //   console.log(token);
  //   return "abcd";

  if (!token) {
    return next(new ErrorHandler("Please Login to access this resource", 401));
  }
  const decodeData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await user.findById(decodeData.id);
  next();
};

const authorizedRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role:${req.user.role} is not allowed to access this resource`,
          403
        )
      );
    }
    next();
  };
};

module.exports = { isUserAuthenticated, authorizedRoles };
