import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import 'reflect-metadata'

@Entity()
export class Perfil{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    avatarUrl:string


}