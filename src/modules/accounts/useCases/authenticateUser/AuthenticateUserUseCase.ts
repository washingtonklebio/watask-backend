import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../errors/AppError";

import { IUsersRepository } from "../../repositories/IUsersRepository"

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ) {}

    async execute({email, password}: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email);
        
        if (!user) {
            throw new AppError('Email ou senha incorreta!');
        }
        
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError('Email ou senha incorreta!');
        }

        const token = sign({}, '615848992fe3067630420fd0cc12e4e4', {
            subject: user.id,
            expiresIn: '1d',
        });

        const tokenData: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return tokenData;
    }
}

export { AuthenticateUserUseCase }