import express from "express"
import { authUser, getUserProfile, logoutUser, registerUser, updateUserProfile,  } from "../controller/userController.js"
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/auth").post(authUser)
router.route("/").post(registerUser)
router.route("/logout").post(logoutUser)
router.route("/profile").get(protect,getUserProfile).put(protect,updateUserProfile)

export default router