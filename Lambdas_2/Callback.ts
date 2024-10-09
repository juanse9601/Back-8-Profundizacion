// Callback
// Callback es una funcion que se pasa como argumento a otra funcion y que se ejecuta despues de que esta ultima
// haya completado su operacion
//Eventos asincronos

function hacerAlgoConCallback(Callback:() => void): void{
    console.log("Empezo a hacer algo");
    Callback(); // llama al callback despues de hacer algo
}

function miCallback(): void{
    console.log("Callback ejecutado.");
}

hacerAlgoConCallback(miCallback);