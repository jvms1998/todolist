import { Router } from "express";
import { TodoController } from "../controllers/TodoController";

export const todoRouter = Router();
const  todoController = new TodoController();

todoRouter.post("/", todoController.create);
todoRouter.get("/", todoController.list);
todoRouter.get("/:id", todoController.show);