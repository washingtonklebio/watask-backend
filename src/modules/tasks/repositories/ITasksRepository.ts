import { ICreateTaskDTO } from "../dtos/ICreateTaskDTO";
import { Task } from "../entities/Task";

interface ITaskRepository {
    create(data: ICreateTaskDTO): Promise<void>;
    update(data: ICreateTaskDTO): Promise<void>;
    list(user_id: string): Promise<Task[]>;
    findById(id: string): Promise<Task>;
}

export { ITaskRepository }