import { Task } from "./Task";
import { TaskStatus } from "./TaskStatus";
import { TaskPriority } from "./TaskPriority";
import { User } from "./User";

//para gestionar las tareas
export class TaskManager {

    private tasks: Task[] = [];

    //Metodo para agregar una tarea
    agregarTarea(tarea: Task): void {
        this.tasks.push(tarea);
        console.log(`Tarea ${tarea.id} agregada exitosamente`);
    }


    //metodo para listar las tareas
    listarTareas(): Task[] {
        return this.tasks;
    }


    // metodo para actualizar el estado de una tarea
    actualizarEstado(id:number, nuevoEstado: TaskStatus): void {
        const tarea = this.tasks.find(t => t.id == id);
        if (tarea) {
            tarea.estado = nuevoEstado;
            console.log(`El estado de la tarea ${tarea.id} ha sido actualizado exitosamente a :`, nuevoEstado );
        } else {
            console.log(`No se encontro la tarea con id ${id}`);
        }

    }  
    
    
    // metodo para actualizar la prioridad de una tarea
    actualizarPrioridad(id:number, nuevaPrioridad: TaskPriority): void {
        const tarea = this.tasks.find(t => t.id == id);
        if (tarea) {
            tarea.prioridad = nuevaPrioridad;
            console.log(`La prioridad de la tarea ${tarea.id} ha sido actualizada exitosamente a :`, nuevaPrioridad );
        } else {
            console.log(`No se encontro la tarea con id ${id}`);
        }
    }

     actualizarUsuario(id:number, nuevoUsuario: User): void {
        const tarea = this.tasks.find(t => t.id == id);
        if (tarea) {
            tarea.usuario = nuevoUsuario;
            console.log(`El usuario de la tarea ${tarea.id} ha sido actualizado exitosamente a :`, nuevoUsuario );
        } else {
            console.log(`No se encontro la tarea con id ${id}`);
        }
    }
}