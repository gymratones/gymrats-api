import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Gym } from './gym.entity';
import { OneToMany } from 'typeorm';

@Entity()
export class GymType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 45 })
    name: string;

    @OneToMany(() => Gym, (gym) => gym.gymType)
    gyms: Gym[];
}