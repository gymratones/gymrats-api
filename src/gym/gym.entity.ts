import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { GymType } from './gymtype.entity';

@Entity()
export class Gym {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'google_maps_id' })
    google_maps_id: number;

    @Column({ name: 'name', length: 45 })
    name: string;

    @Column({ name: 'latitude', type: 'double' })
    latitude: number;

    @Column({ name: 'longitude', type: 'double' })
    longitude: number;

    @Column({ name: 'active', type: 'boolean' })
    active: boolean;

    @ManyToOne(() => GymType, (gymType) => gymType.gyms)
    @JoinColumn({ name: "gym_type_id" })
    gymType: GymType;

    @ManyToMany(() => User, (user) => user.gyms)
    users: User[];
}