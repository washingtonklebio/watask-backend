import { Request, Response } from 'express';
import { container } from "tsyringe";

import { UpdateTaskUseCase } from './UpdateTaskUseCase';

class UpdateTaskController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {id, name, description, estimate, status} = request.body;

        const updateTaskUseCase = container.resolve(UpdateTaskUseCase);

        const task = await updateTaskUseCase.execute({id, name, description, estimate, status});

        return response.status(201).json(task);
    }
}

export { UpdateTaskController }