import { Perfil } from "./Perfil";
import { Publicacion } from "./Publicacion";
import { Roles } from "./Roles";
import { Entity,PrimaryGeneratedColumn,Column, OneToOne, JoinColumn, OneToMany, ManyToMany, JoinTable } from "typeorm"

@Entity()
export class Usuario{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nombre:string;

    
    @OneToOne(()=> Perfil,{cascade:true})
    @JoinColumn()
    perfil: Perfil;


    @OneToMany(()=> Publicacion, publicacion => publicacion.usuario)
    publicaciones: Publicacion[];
    

    @ManyToMany(() => Roles,{cascade = true}){
    @JoinTable()
    roles: Roles[];
    }

}