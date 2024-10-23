
import { Usuario } from "./Usuario";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

export class Publicacion{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    titulo:string;

    @ManyToOne(() => Usuario, usuario => usuario.publicaciones)
    usuario: Usuario;

}    