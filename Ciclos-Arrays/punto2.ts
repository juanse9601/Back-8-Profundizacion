const estudiantes = [
    {nombre:`Lucia`,asignaturas:[{nombre:`matematicas`,nota:3.5},{nombre:`historia`,nota:4.0},{nombre:`Quimica`,nota:2.9}]},
    {nombre:`Pedro`,asignaturas:[{nombre:`matematicas`,nota:2.2},{nombre:`historia`,nota:1.9},{nombre:`Quimica`,nota:2.7}]},
    {nombre:`Sofia`,asignaturas:[{nombre:`matematicas`,nota:4.5},{nombre:`historia`,nota:4.2},{nombre:`Quimica`,nota:4.7}]}

    //Un array de estudiantes dentro de ese array tengo 3 objetos y dentro de cada objeto tengo un array
];

for (let i = 0; i < estudiantes.length; i++){ //recorre el arreglo de estudiantes
    const estudiante = estudiantes[i]   // toma el objeto en la posicion i del arreglo y lo asigna a la variable estudiante
    let sumaNotas = 0 // almacenar la suma de las notas del estudiante
    let advertencia = false  //la uso para indicar si ha encontrado una nota baja

    for (let j = 0; j < estudiante.asignaturas.length; j++){ // Recorro el array de asignaturas por cada estudiante
        const asignatura = estudiante.asignaturas[j] 
        sumaNotas += asignatura.nota 

        if (asignatura.nota < 2.0){
            console.log("Advertencia : ", estudiante.nombre, "tiene una nota muy baja ", asignatura.nota, "en ", asignatura.nombre)
            advertencia = true
        }

    }

    const promedio = sumaNotas / estudiante.asignaturas.length

    if (promedio < 3.0){
        console.log(estudiante.nombre, "debe repetir el curso.")
    }else if (!advertencia)
        console.log(estudiante.nombre,"aprobo el curso")
}