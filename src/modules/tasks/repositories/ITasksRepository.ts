import { ICreateTaskDTO } from "../dtos/ICreateTaskDTO";

interface ITaskRepository {
    create(data: ICreateTaskDTO): Promise<void>;
}

export { ITaskRepository }