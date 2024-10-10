function esPar(numero: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (numero % 2 === 0) {
            resolve("Es par");
        }else{
            reject("Es impar");
        }
    });    
    
}


//Usar la promesa

esPar(4)
    .then((mensaje) => console.log(mensaje)) // sie es par
    .catch((error) => console.log(error)) // si es impar


esPar(7)
    .then((mensaje) => console.log(mensaje)) // si es par
    .catch((error) => console.log(error)) // si es impar