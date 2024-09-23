import { TaskManager } from "./TaskManager";
import { Task } from "./Task";
import { TaskStatus } from "./TaskStatus";
import { TaskPriority } from "./TaskPriority";
import { User } from "./User";

//crear una instancia de task manager
const taskManager = new TaskManager();

//crear usuarios
const usuario1: User = {
    id: 1,
    nombre: "Juan",
    email: "juan@gmail.com" 
}

const usuario2: User = {
    id: 2,
    nombre: "Pedro",
    email: "pedro@gmail.com" 
}

// crear una tarea
const tarea1: Task = {
    id: 1,
    nombre: "Tarea 1",
    descripcion: "Descripcion de la tarea 1",
    estado: TaskStatus.Pendiente,
    prioridad: TaskPriority.BAJA,
    usuario: usuario1
}

const tarea2: Task = {
    id: 2,
    nombre: "Tarea 2",
    descripcion: "Descripcion de la tarea 2",
    estado: TaskStatus.EnProgreso,
    prioridad: TaskPriority.ALTA,
    usuario: usuario2
}

//agregar las tareas a la task manager
taskManager.agregarTarea(tarea1);   
taskManager.agregarTarea(tarea2);


//listar las tareas
console.log("Listado de tareas actuales:" , taskManager.listarTareas());

//actualizar el estado de una tarea
taskManager.actualizarEstado(1, TaskStatus.Completada);

// volver a listar las tareas
console.log("Listado de tareas actuales:" , taskManager.listarTareas());