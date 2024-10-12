import { Entity, ManyToOne, CreateDateColumn, PrimaryColumn, Check, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
@Check('"user_id" != "follower_user_id"')
export class Follow {
    @PrimaryColumn({ name: 'user_id' })
    user_id: number;

    @PrimaryColumn({ name: 'follower_user_id' })
    follower_user_id: number;

    @ManyToOne(() => User, user => user.followers)
    @JoinColumn({ name: "user_id" })
    user: User;

    @ManyToOne(() => User, user => user.following)
    @JoinColumn({ name: "follower_user_id" })
    followerUser: User;

    @CreateDateColumn({ name: 'created_at' })
    created_at: Date;
}