import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoute.js";
import connectDB from "./config/Db.js";
import { errorHandler, notFound } from "./middleware/errorHandlerMiddleware.js";
import cookieParser from "cookie-parser";

// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app = express();

// Connect to the database
connectDB();

// Middleware setup
// Parse JSON bodies
app.use(express.json()); 
// Parse URL-encoded bodies
app.use(express.urlencoded({extended: true}));
// Parse Cookie header and populate req.cookies
app.use(cookieParser());

// Get the port from environment variables or use 3000 as default
const PORT = process.env.PORT || 3000;

// Routes
// All routes starting with /api/users will be handled by userRoutes
app.use("/api/users", userRoutes);

// Error Handling Middleware
// Handle 404 errors for undefined routes
app.use(notFound);
// Global error handler
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});