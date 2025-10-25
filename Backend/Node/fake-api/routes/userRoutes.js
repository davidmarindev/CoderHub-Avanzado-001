import express from "express";
import usersController from "../controllers/usersController.js";
const router = express.Router();

router.get("/", usersController.index);

router.get("/:id", usersController.show);

router.post("/", usersController.create);

router.put("/:id", usersController.update);

router.delete("/:id", usersController.deleteUser);

router.get("/:id/posts", usersController.postByUser);

export default router;
