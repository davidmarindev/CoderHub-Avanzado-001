import userRoutes from "./user.routes.js";

import express from "express";
const router = express.Router();

router.use("/users", userRoutes);

export default router;
