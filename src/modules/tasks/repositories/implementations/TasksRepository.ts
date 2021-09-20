import { getRepository, Repository } from "typeorm";
import { ICreateTaskDTO } from "../../dtos/ICreateTaskDTO";
import { Task } from "../../entities/Task";
import { ITaskRepository } from "../ITasksRepository";


class TasksRepository implements ITaskRepository {
    private repository: Repository<Task>

    constructor() {
        this.repository = getRepository(Task);
    }

    async create({ name, description, status, estimate, user_id }: ICreateTaskDTO): Promise<void> {
        const task = this.repository.create({ name, description, status, estimate, user_id });

        await this.repository.save(task);
    }
}

export { TasksRepository }