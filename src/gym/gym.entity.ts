import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany } from 'typeorm';
import { User } from '../user/user.entity';
import { GymType } from './gymtype.entity';

@Entity()
export class Gym {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    google_maps_id: number;

    @Column({ length: 45 })
    name: string;

    @Column('double')
    latitude: number;

    @Column('double')
    longitude: number;

    @Column('boolean')
    active: boolean;

    @ManyToOne(() => GymType, (gymType) => gymType.gyms)
    gymType: GymType;

    @ManyToMany(() => User, (user) => user.gyms)
    users: User[];
}