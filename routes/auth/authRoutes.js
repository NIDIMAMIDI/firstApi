import { Router } from "express";
import { signupMiddleware } from "../../middleware/signupMiddleware.js";
import { signup } from "../../controllers/auth/authControllers.js";
const authRouter = Router()

authRouter.post("/signup", signupMiddleware, signup)

export default authRouter