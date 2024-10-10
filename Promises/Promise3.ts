function cargarDatos(){
    return new Promise((resolve, reject) => {
        console.log("Cargando datos...");
        setTimeout(() => {
            const exito = Math.random() > 0.5;

            if (exito) { // el numeroes mayor a 0.5 se considera exitosa
                resolve({id:1, nombre: "producto 1", precio: 100});
            } else { // el numero menor a 0.5 se considera fallido
                reject("No se pudo cargar los datos");
            }

        }, 3000);
    });
}


cargarDatos()
    .then((datos) => console.log(datos))
    .catch((error) => console.log(error));