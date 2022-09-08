import { hash } from "bcryptjs";
import { Repository } from "typeorm";
import dataSource from "../../database";
import { User } from "../../entities/User";

interface IUser {
    name: string;
    email: string;
    password: string;

}

class CreateUserService {
    private UserRepository: Repository<User>;

    constructor() {
        this.UserRepository = dataSource.getRepository(User)
    }

    public async execute({
        name,
        email,
        password
    }: IUser): Promise<User> {
        if (!name || !email || !password) {
            throw new Error("Dados incompletos")
        }

        const hashedPassword = await hash(password, 8);

        const user = this.UserRepository.create({
            name,
            email,
            password: hashedPassword,
            is_active: 1
        });

        await this.UserRepository.save(user);

        return user;
    }
}

export { CreateUserService }