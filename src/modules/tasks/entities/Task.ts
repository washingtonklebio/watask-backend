import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';

enum TaskType {
    NOT_DONE,
    IN_PROGRESS,
    DONE
}

@Entity('tasks')
class Task {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    status: TaskType;

    @Column()
    estimate: Date;

    @Column()
    user_id: string;
    
    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }

}

export { Task }