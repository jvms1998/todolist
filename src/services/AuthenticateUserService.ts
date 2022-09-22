import { compare } from "bcryptjs";
import { Repository } from "typeorm";
import dataSource from "../database";
import { User } from "../entities/User";
import authConfig from "../config/auth"
import { sign } from "jsonwebtoken";



interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: User;
    token: string;
}

export class AuthenticateUserService {

    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = dataSource.getRepository(User)
    }

    public async execute({ email, password }: IRequest): Promise<IResponse> {

        const user = await this.usersRepository.findOne({ where: { email } });

        if (!user) {
            throw new Error("Senha ou email incorreto");
        }

        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched) {
            throw new Error("Senha ou email incorreto");
        }

        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({ name: user.name, email: user.email }, secret, { subject: ` ${user.id}` });

        return { user, token };
    }

}