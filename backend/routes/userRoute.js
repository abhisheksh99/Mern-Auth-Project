import express from "express"
import { authUser, getUserProfile, logoutUser, registerUser, UpdateUserProfile } from "../controller/userController.js"

const router = express.Router()

router.route("/auth").post(authUser)
router.route("/").post(registerUser)
router.route("/logout").post(logoutUser)
router.route("/profile").get(getUserProfile).put(UpdateUserProfile)

export default router