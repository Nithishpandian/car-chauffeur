const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc    Register new user
// @route   POST /api/user/register
// @access  Public
const registerUser = asyncHandler(async (req, res, next) => {
  const { email, password, phone, fullname } = req.body;

  if (!email || !password || !phone || !fullname) {
    res.status(400);
    return next(new Error("Please add all the fields"));
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    return next(new Error("User already exists"));
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    email,
    password: hashedPassword,
    fullname,
    phone,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
      token: generateToken(user._id),
      fullname: user.fullname,
      phone: user.phone,
      admin: user.admin,
    });
  } else {
    res.status(400);
    return next(new Error("Invalid user data"));
  }
});

// @desc    Login user
// @route   POST /api/user/login
// @access  Public
const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      email: user.email,
      token: generateToken(user._id),
      fullname: user.fullname,
      phone: user.phone,
      admin: user.admin,
    });
  } else {
    res.status(400);
    return next(new Error("Invalid credentials"));
  }
});

// @desc    Get all users data
// @route   GET /api/user/data
// @access  Private
const usersData = asyncHandler(async (req, res, next) => {
  const users = await User.find().select("_id email");

  res.status(200).json(users);
});

// @desc    Get user data
// @route   GET /api/user/me
// @access  Private
const getUserDetails = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select(
    "_id email fullname phone admin"
  );

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404);
    return next(new Error("User not found"));
  }
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  usersData,
  getUserDetails,
};
