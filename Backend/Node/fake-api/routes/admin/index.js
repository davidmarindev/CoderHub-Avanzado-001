import express from "express";
import adminController from "../../controllers/admin/indexController.js";
const router = express.Router();

router.get("/", adminController.adminIndex);

export default router;
