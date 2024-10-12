import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Follow } from './follow.entity';
import { Post } from '../post/post.entity';
import { Like } from '../post/like.entity';
import { Gym } from '../gym/gym.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 45 })
    firstName: string;

    @Column({ length: 45 })
    lastName: string;

    @Column({ length: 45, unique: true })
    username: string;

    @Column({ length: 45, unique: true })
    email: string;

    @Column({ length: 45 })
    password: string;

    @Column({ type: 'bigint', nullable: true })
    phone: number;

    @Column({ default: false })
    verified: boolean;

    @OneToMany(() => Follow, follow => follow.user)
    followers: Follow[];

    @OneToMany(() => Follow, follow => follow.followerUser)
    following: Follow[];

    @OneToMany(() => Post, post => post.user)
    posts: Post[];

    @OneToMany(() => Like, like => like.user)
    likes: Like[];

    @ManyToMany(() => Gym, (gym) => gym.users)
    @JoinTable()
    gyms: Gym[];
}