import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"

export const authUser = asyncHandler(async(req,res)=>{
    console.log("Auth User");
    
})