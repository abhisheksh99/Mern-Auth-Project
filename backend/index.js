import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoute.js";
import connectDB from "./config/Db.js";

// Load environment variables
dotenv.config();

const app = express();

// Connect to the database
connectDB()

// Middleware
app.use(express.json()); 

// Get the port from environment variables or use a default
const PORT = process.env.PORT || 3000;

// Routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});