import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Category } from "./Category";
import { User } from "./User";

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
    
    @Column()
    user_id: number;

    @JoinColumn({name: "user_id"})
    @ManyToOne(()=>User, user=>user.id)
    user: User

    @Column()
    category_id: number;

    @JoinColumn({name: "category_id"})
    @ManyToOne(()=>Category, category=>category.id)
    category: Category

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;    
    
}