import { Router } from "express";
import { registerUser,loginUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"

const router = Router()

//upload.fields() Multer ka middleware hai, aur ye incoming request ki files ko Multer ke through process/upload karta hai.

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ])
    ,
    registerUser
)

router.route("/login").post(loginUser)
/// http://localhost:8000/api/v1/users/login

router.route("/logout").post(verifyJWT,logoutUser)


export default router