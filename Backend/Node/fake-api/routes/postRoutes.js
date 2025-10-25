import express from "express";
import postsController from "../controllers/postsController.js";
const router = express.Router();

router.get("/", postsController.index);

router.get("/:id", postsController.show);

router.post("/", postsController.create);

router.put("/:id", postsController.update);

router.delete("/:id", postsController.deletePost);

export default router;
