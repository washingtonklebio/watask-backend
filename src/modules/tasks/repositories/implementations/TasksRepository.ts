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

    async update({ id, name, description, status, estimate }: ICreateTaskDTO): Promise<void> {
        this.repository.update(id, {
            name,
            description,
            status,
            estimate
        });
    }

    async list(user_id: string): Promise<Task[]> {
        const tasks = await this.repository.find({
            where: { user_id },
            relations: ['user'], 
            order: {
                estimate: 'ASC'
            }
        });

        return tasks;
    }


    async findById(id: string): Promise<Task> {
        const task = await this.repository.findOne(id);

        return task;
    }
}

export { TasksRepository }