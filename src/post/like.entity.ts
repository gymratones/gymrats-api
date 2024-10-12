import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, JoinColumn } from 'typeorm';
import { Post } from './post.entity';
import { User } from '../user/user.entity';

@Entity()
export class Like {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Post, post => post.likes)
    @JoinColumn({ name: "post_id" })
    post: Post;

    @ManyToOne(() => User, user => user.likes)
    @JoinColumn({ name: "user_id" })
    user: User;

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;
}