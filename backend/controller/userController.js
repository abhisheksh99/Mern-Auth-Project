import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc Auth user/set Token
// route POST /api/users/auth
// @access Public
export const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth User" });
});

// @desc Register a new user
// route POST /api/users
// @access Public
export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
  
    // Validate input
    if (!name || !email || !password) {
      res.status(400);
      throw new Error('Please provide all required fields');
    }
  
    // Check if user already exists
    const userExists = await User.findOne({email});
  
    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }
  
    // Create new user
    const user = await User.create({
      name,
      email,
      password,
    });
  
    if (user) {
        generateToken(res,user._id)
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  });

// @desc Logout User
// route POST /api/users/logout
// @access Public
export const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout User" });
});

// @desc GET user profile
// route GET /api/users/profile
// @access Private
export const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile" });
});

// @desc Update user profile
// route PUT /api/users/profile
// @access Private
export const UpdateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User Profile" });
});
