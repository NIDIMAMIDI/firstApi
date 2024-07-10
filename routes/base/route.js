import { Router } from "express";
import userRouter from "../user/userRotes.js";
import authRouter from "../auth/authRoutes.js";
const router = Router()

router.use("/users", userRouter)
router.use('/auth', authRouter)


export default router