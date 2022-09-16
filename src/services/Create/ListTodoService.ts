import { Repository } from "typeorm";
import dataSource from "../../database";
import { Category } from "../../entities/Category";
import { Todo } from "../../entities/Todo";


interface IRequest {
    user_id: number;
}

class ListTodoService {
    private todoRepository: Repository<Todo>;

    constructor() {
        this.todoRepository = dataSource.getRepository(Todo)
    }

    public async execute({
        user_id
    }: IRequest): Promise<Todo[]> {

        const todo = this.todoRepository.find({where:{
            user_id
        },
        relations: ["category"]
        });

        return todo;
    }
}

export { ListTodoService }