import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Follow } from './follow.entity';
import { Post } from '../post/post.entity';
import { Like } from '../post/like.entity';
import { Gym } from '../gym/gym.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    oauthId: string;

    @Column({ name: 'first_name', length: 45 })
    firstName: string;

    @Column({ name: 'last_name', length: 45 })
    lastName: string;

    @Column({ nullable: true })
    profilePicture: string;

    @Column({ default: 'oauth' })
    authProvider: string;

    @Column({ nullable: true })
    accessToken: string;

    @Column({ nullable: true })
    refreshToken: string;

    @Column({ type: 'json', nullable: true })
    oauthData: any;

    @Column({ name: 'username', length: 45, unique: true })
    username: string;

    @Column({ name: 'email', length: 45, unique: true })
    email: string;

    @Column({ name: 'phone', type: 'bigint', nullable: true })
    phone: number;

    @Column({ name: 'verified', default: false })
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
    @JoinTable({
        name: 'user_gyms',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'gym_id',
            referencedColumnName: 'id'
        }
    })
    gyms: Gym[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({ default: true })
    isActive: boolean;
}