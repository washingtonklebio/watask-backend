import { inject, injectable } from "tsyringe";
import { ICreateTaskDTO } from "../../dtos/ICreateTaskDTO";
import { ITaskRepository } from "../../repositories/ITasksRepository";

@injectable()
class CreateTaskUseCase {
    constructor(
        @inject("TasksRepository")
        private tasksRepository: ITaskRepository
    ) {}

    async execute({name, description, estimate, status, user_id}: ICreateTaskDTO): Promise<void> {
        this.tasksRepository.create({
            name,
            description,
            estimate,
            status,
            user_id
        })
    }
}

export { CreateTaskUseCase }