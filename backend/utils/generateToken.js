import jwt from "jsonwebtoken"

// Function to generate a JWT token and set it as an HTTP-only cookie
const generateToken = (res, userId) => {
    // Create a JWT token
    const token = jwt.sign(
        { userId },  // Payload: user ID
        process.env.JWT_SECRET,  // Secret key for signing the token
        { expiresIn: "30d" }  // Token expiration time: 30 days
    )

    // Set the token as an HTTP-only cookie
    res.cookie("jwt", token, {
        httpOnly: true,  // Prevents client-side JS from reading the cookie
        sameSite: 'strict',  // Prevent CSRF attacks
        maxAge: 30 * 24 * 60 * 60 * 1000  // Cookie expiry: 30 days in milliseconds
    })
}

export default generateToken