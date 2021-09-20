import { Request, Response } from 'express';
import { container } from "tsyringe";

import { CreateTaskUseCase } from './CreateTaskUseCase';

class CreateTaskController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {name, description, estimate, status} = request.body;
        const { id } = request.user;

        const createTaskUseCase = container.resolve(CreateTaskUseCase);

        const task = await createTaskUseCase.execute({name, description, estimate, status, user_id: id});

        return response.status(201).json(task);
    }
}

export { CreateTaskController }