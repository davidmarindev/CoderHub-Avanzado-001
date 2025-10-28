import express from "express";
import usersController from "../controllers/usersController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = express.Router();

router.get("/", authMiddleware, usersController.index);

router.get("/:id", usersController.show);

router.post("/", usersController.create);

router.put("/:id", usersController.update);

router.delete("/:id", usersController.deleteUser);

router.get("/:id/posts", usersController.postByUser);

export default router;
