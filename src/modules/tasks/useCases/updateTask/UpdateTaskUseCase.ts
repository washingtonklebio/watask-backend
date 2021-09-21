import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ICreateTaskDTO } from "../../dtos/ICreateTaskDTO";
import { ITaskRepository } from "../../repositories/ITasksRepository";

@injectable()
class UpdateTaskUseCase {
    constructor(
        @inject("TasksRepository")
        private tasksRepository: ITaskRepository
    ) {}

    async execute({id, name, description, estimate, status}: ICreateTaskDTO): Promise<void> {

        if (!id) {
            throw new AppError("Identificador não informado!");
        }
        
        const task = await this.tasksRepository.findById(id);
        
        if (!task) {
            throw new AppError("Atividade não existe!");
        }
       
        await this.tasksRepository.update({
            id,
            name,
            description,
            estimate,
            status
        })
    }
}

export { UpdateTaskUseCase }