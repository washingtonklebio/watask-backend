import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListTaskUseCase } from './ListTasksUseCase';

class ListTaskController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;
        const listTasksUseCase = container.resolve(ListTaskUseCase);

        const allByUser = await listTasksUseCase.execute(id);

        return response.json(allByUser);
    }
}

export { ListTaskController }