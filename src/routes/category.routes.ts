import { request, response, Router } from "express";
import { CategoryController } from "../controllers/CategoryController";

export const categoryRouter = Router();
const categoryController = new CategoryController();

categoryRouter.post('/', categoryController.create); 