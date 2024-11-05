import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"

// @desc Auth user/set Token
// route POST /api/users/auth
// @access Public
export const authUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Auth User"})
    
    
})

// @desc Register a new user
// route POST /api/users
// @access Public
export const registerUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Register User"})
    
    
})


// @desc Logout User
// route POST /api/users/logout
// @access Public
export const logoutUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Logout User"})
    
    
})

// @desc GET user profile
// route GET /api/users/profile
// @access Private
export const getUserProfile = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"User Profile"})
    
    
})

// @desc Update user profile
// route PUT /api/users/profile
// @access Private
export const UpdateUserProfile = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Update User Profile"})
    
    
})