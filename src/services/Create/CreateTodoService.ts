import { Repository } from "typeorm";
import dataSource from "../../database";
import { Category } from "../../entities/Category";
import { Todo } from "../../entities/Todo";


interface IRequest {
    name_task: string;
    description_task: string;
    user_id: number;
    category_id: number;
}

class CreateTodoService {
    private todoRepository: Repository<Todo>;
    private categoryRepository: Repository<Category>

    constructor() {
        this.categoryRepository = dataSource.getRepository(Category)
        this.todoRepository = dataSource.getRepository(Todo)
    }

    public async execute({
        name_task,
        description_task,
        user_id,
        category_id
    }: IRequest): Promise<Todo> {
        if (!name_task || !description_task || !user_id || !category_id) {
            throw new Error("Dados incompletos")
        }

        const cat_exist = await this.categoryRepository.findOne({ where: { id: category_id } })

        if (!cat_exist) {
            throw new Error("Categoria inxistente")
        }

        const todo = this.todoRepository.create({
            name_task,
            description_task,
            user_id,
            category_id,
            status: 0
        });

        await this.todoRepository.save(todo);

        return todo;
    }
}

export { CreateTodoService }