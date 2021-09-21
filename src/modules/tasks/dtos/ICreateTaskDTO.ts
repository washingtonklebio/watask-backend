enum TaskType {
    NOT_DONE,
    IN_PROGRESS,
    DONE
}

interface ICreateTaskDTO {
    id?: string;
    user_id?: string;
    name: string;
    description: string;
    status: TaskType;
    estimate: Date;
}

export { ICreateTaskDTO }