import { Column, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuario";


export class Roles{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nombre:string

    @ManyToMany(() => Usuario, usuario => usuario.roles)
    usuarios: Usuario[];

    //OneToOne = 1 a 1                    //OneToOne
    //OneToMany =  1 a muchos             //ManyToOne
    //ManyToMany = muchos a muchos        //ManyToMany


}