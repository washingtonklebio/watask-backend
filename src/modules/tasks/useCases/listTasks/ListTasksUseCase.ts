import { inject, injectable } from "tsyringe";
import { Task } from "../../entities/Task";
import { ITaskRepository } from "../../repositories/ITasksRepository";


@injectable()
class ListTaskUseCase {

    constructor(
        @inject('TasksRepository')
        private tasksRepository: ITaskRepository
    ){}

    async execute(user_id: string): Promise<Task[]> {
        const tasks = await this.tasksRepository.list(user_id);

        return tasks;
    }

}

export { ListTaskUseCase }