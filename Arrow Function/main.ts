import { Estudiante } from "./Estudiante";

//Creacion de un arreglo de objetos tipo estudiante

const estudiantes: Estudiante[] = [
    new Estudiante("Juan",20,85),
    new Estudiante("Maria",22,55),
    new Estudiante("Pedro",19,90),
    new Estudiante("Ana",21,75),
    new Estudiante("Luis",23,40)

];

// filtrar estudiantes conuna nota mayor o igual a 60
const estudiantesAprobados = estudiantes.filter((estudiante) => estudiante.nota >= 60);
console.log("Estudiantes aprovados :" , estudiantesAprobados);

//ordenar estudiantes por nota(mayor a menor)
const estudiantesOrdenados = estudiantes.sort((a, b ) => b.nota - a.nota);
console.log("Estudiantes ordenados por nota:" , estudiantesOrdenados);

//obtener un arreglo solo con los nombres de los estudiantes
const nombresEstudiantes = estudiantes.map((estudiante ) => estudiante.nombre);
console.log("Nombres de estudiantes: " , nombresEstudiantes);
