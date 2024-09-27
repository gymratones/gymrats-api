import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dummy {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}