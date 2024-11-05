import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// Middleware to protect routes that require authentication
export const protect = asyncHandler(async (req, res, next) => {
    let token;

    // Extract JWT token from the 'jwt' cookie
    token = req.cookies.jwt;

    if (token) {
        try {
            // Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Fetch user details from database, excluding the password
            req.user = await User.findById(decoded.userId).select("-password");

            // If user not found in DB despite valid token
            if (!req.user) {
                res.status(401);
                throw new Error("Not authorized, user not found");
            }

            next();
        } catch (error) {
            console.error(error);  // Log the error for debugging
            res.status(401);
            throw new Error("Not authorized, invalid token");
        }
    } else {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});