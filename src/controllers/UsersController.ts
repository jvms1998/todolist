import { Request, Response } from "express";
import { CreateUserService } from "../services/Create/CreateUserService";


export class UsersController {

    async create(request: Request, response: Response): Promise<Response> {

        const { name, email, password } = request.body;

        try {
            const createUserService = new CreateUserService();
            const users = await createUserService.execute({ name, email, password })
            return response.status(201).json(users);
        } catch (error) {
            return response.json({ message: error.message });
        }

    }

}