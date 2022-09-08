import { Request, Response } from "express";
import { CreateCategoryService } from "../services/Create/CreateCategoryService";


export class CategoryController {

    async create(request: Request, response: Response): Promise<Response> {

        const { name, color } = request.body;

        try {
            const createCategoryService = new CreateCategoryService();
            const category = await CreateCategoryService.execute({ name, color })
            return response.status(201).json(category);
        } catch (error) {
            return response.json({ message: error.message });
        }

    }

}