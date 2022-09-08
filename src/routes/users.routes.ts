import { request, response, Router } from "express";
import { UsersController } from "../controllers/usersController";

export const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', usersController.create);