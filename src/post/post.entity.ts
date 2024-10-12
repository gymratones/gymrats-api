import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Like } from './like.entity';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;

    @Column({ name: 'photo_hash', length: 45 })
    photo_hash: string;

    @Column({ name: 'content', length: 45 })
    content: string;

    @ManyToOne(() => User, user => user.posts)
    @JoinColumn({ name: "user_id" })
    user: User;

    @OneToMany(() => Like, like => like.post)
    likes: Like[];
}