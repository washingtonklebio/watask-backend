import { inject, injectable } from 'tsyringe';
import  { hash } from 'bcrypt';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}
    
    async execute({ name, email, password }: ICreateUserDTO): Promise<void> {

        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error('E-mail já foi cadastrado!');
        }

        const encryptPassword = await hash(password, 8);

        await this.usersRepository.create({
            name,
            email,
            password: encryptPassword
        })
    }
}

export { CreateUserUseCase }