import { Repository } from "typeorm";
import dataSource from "../../database";
import { Category } from "../../entities/Category";

interface ICategory {
    name: string;
    color: string;
}

class CreateCategoryService {
    private UserRepository: Repository<Category>;

    constructor() {
        this.UserRepository = dataSource.getRepository(Category)
    }

    public async execute({
        name,
        color
    }: ICategory): Promise<Category> {
        if (!name) {
            throw new Error("Dados incompletos")
        }

        const category = this.UserRepository.create({
            name,
            color
        });

        await this.UserRepository.save(category);

        return category;
    }
}

export { CreateCategoryService }