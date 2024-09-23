import { TaskStatus } from "./TaskStatus";
import { TaskPriority } from "./TaskPriority";  
import { User } from "./User";


export interface Task {
    id: number,
    nombre: string,
    descripcion: string,
    estado: TaskStatus,
    prioridad: TaskPriority,
    usuario: User
}