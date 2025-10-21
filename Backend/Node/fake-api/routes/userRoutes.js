import express from "express";
import usersController from "../controllers/usersController.js";
const router = express.Router();

router.get("/users", usersController.index);

router.get("/users/:id", usersController.show);

router.post("/users", usersController.create);

router.put("/users/:id", usersController.update);

router.delete("/users/:id", usersController.deleteUser);

export default router;
