import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Todo{

    @PrimaryGeneratedColumn()
    id: string;

    @Column('text')
    task : string;

    @Column('boolean')
    completed : true | false;

} 