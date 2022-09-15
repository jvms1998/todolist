import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, JoinColumn } from "typeorm";

@Entity("todo")
export class Todo{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name_task: string;

    @Column()
    description_task: string;

    @Column()
    status: number;

    @JoinColumn()
    user_id: number;

    @JoinColumn()
    category_id: number;
}