import userRoutes from "./userRoutes.js";
import postRoutes from "./postRoutes.js";

import express from "express";
const router = express.Router();

router.use("/users", userRoutes);
router.use("/posts", postRoutes);

export default router;
