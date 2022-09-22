import { Request, Response } from "express";
import { CreateTodoService } from "../services/Create/CreateTodoService";
import { ListTodoService } from "../services/Create/ListTodoService";
import { ShowTodoService } from "../services/Create/ShowTodoService ";



export class TodoController {

    async create(request: Request, response: Response): Promise<Response> {

        const { name_task, description_task, category_id } = request.body;
        const { id } = request.user;

        try {
            const createTodoService = new CreateTodoService();
            const todo = await createTodoService.execute({ name_task, description_task, user_id: Number(id), category_id })
            return response.status(201).json(todo);
        } catch (error) {
            return response.json({ message: error.message });
        }

    }

    async list(request: Request, response: Response): Promise<Response> {

        const { id } = request.user;

        try {
            const listTodoService = new ListTodoService();
            const todos = await listTodoService.execute({ user_id: Number(id) })
            return response.status(200).json(todos);
        } catch (error) {
            return response.json({ message: error.message });
        }

    }

    async show(request: Request, response: Response): Promise<Response> {

        const user_id  = request.user.id;
        const { id } = request.params;

        try {
            const listTodoService = new ShowTodoService();
            const todo = await listTodoService.execute({ id: Number(id), user_id: Number(user_id) })
            return response.status(200).json(todo);
        } catch (error) {
            return response.json({ message: error.message });
        }

    }

}