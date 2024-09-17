//Requisitos
// Crear una clase estudiante
//almacenar varios objetosde estudiante en un arreglo
// usar metodos de arrays :
// filtrar a los estudiantes con una nota mayor o iguala 60
//ordenar a los estudiantes por su nota
//obtener un arreglo solo con los nombres de los estudiantes
//calcular la nota promedio de todos los estudiantes


// definir laclase estudiante

export class Estudiante {
    nombre: string;
    edad: number;
    nota: number;

    constructor(nombre:string, edad: number,nota:number){
        this.nombre= nombre;
        this.edad= edad;
        this.nota= nota;
    }



}