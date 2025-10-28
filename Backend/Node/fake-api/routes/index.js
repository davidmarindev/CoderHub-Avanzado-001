import userRoutes from "./userRoutes.js";
import postRoutes from "./postRoutes.js";
import authRoutes from "./authRoutes.js";

import express from "express";
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/posts", postRoutes);

export default router;
