const asyncErrorWrapper = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errohandler");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

//Register a User
const registerUser = asyncErrorWrapper(async (req, res, next) => {
  //   res.send("register page");
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is a sample id",
      url: "pp",
    },
  });

  sendToken(user, 201, res);
});

// Login User
const loginUser = asyncErrorWrapper(async (req, res, next) => {
  const { email, password } = req.body;
  // checking if user has given password and email both
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email and Password"));
  }

  // "+password" because 'select' is false in model
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }

  const passwordMatch = await user.comparePassword(password);
  if (!passwordMatch) {
    return next(new ErrorHandler("Invlaid Email or Password", 401));
  }

  sendToken(user, 200, res);
  // const token = user.getJWTToken();
  // res.status(200).json({
  //   success: true,
  //   token,
  // });
});

// Logout User
const logoutUser = asyncErrorWrapper(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

module.exports = { registerUser, loginUser, logoutUser };
