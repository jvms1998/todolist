import { Request, Response } from "express";
import { CreateTodoService } from "../services/Create/CreateTodoService";


export class TodoController {

    async create(request: Request, response: Response): Promise<Response> {

        const { name_task, description_task, user_id, category_id } = request.body;

        try {
            const createTodoService = new CreateTodoService();
            const todo = await createTodoService.execute({ name_task, description_task, user_id, category_id })
            return response.status(201).json(todo);
        } catch (error) {
            return response.json({ message: error.message });
        }

    }

}