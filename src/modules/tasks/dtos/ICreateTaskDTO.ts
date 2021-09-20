enum TaskType {
    NOT_DONE,
    IN_PROGRESS,
    DONE
}

interface ICreateTaskDTO {
    user_id: string;
    name: string;
    description: string;
    status: TaskType;
    estimate: Date;
}

export { ICreateTaskDTO }