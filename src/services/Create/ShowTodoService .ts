import { Repository } from "typeorm";
import dataSource from "../../database";
import { Category } from "../../entities/Category";
import { Todo } from "../../entities/Todo";


interface IRequest {
    id: number;
    user_id: number
}

class ShowTodoService {
    private todoRepository: Repository<Todo>;

    constructor() {
        this.todoRepository = dataSource.getRepository(Todo)
    }

    public async execute({
        id,
        user_id
    }: IRequest): Promise<Todo> {
        if (!id || !user_id) {
            throw new Error("Dados incompletos")
        }

        const todo = await this.todoRepository.findOne({ 
            where:{id},
            relations: ["category", "user"]        
        });

        delete todo.user.password

        return todo;
    }
}

export { ShowTodoService }