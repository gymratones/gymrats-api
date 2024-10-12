import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Gym } from './gym.entity';

@Entity()
export class GymType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'name', length: 45 })
    name: string;

    @OneToMany(() => Gym, (gym) => gym.gymType)
    gyms: Gym[];
}