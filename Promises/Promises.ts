//Que es una promise un objeto representa una operacion asincrona
//que puede ser resuelta o rechazada
//1. Pendiente = creo la promesa y  la operacion asincrona aun no se ha terminado ese estado inicial
//2. Resuelta = la operacion asincrona ha terminado y se ha resuelto
//3. Rechazada = la operacion asincrona ha terminado y se ha rechazado o fallado

//resolve = la promesa se resuelve
//reject = la promesa se rechaza

//.then = manejo el caso exitoso para cuando la promesa se resuleve
//.catch = manejo el caso fallido para cuando la promesa se rechaza
//.finally = manejo el caso final para cuando la promesa se resuelve o se rechaza


//Promesa que me devueva un numero(Promise<number>)
function obtenerNumero(): Promise<number> {
    return new Promise((resolve, reject) => {
        const numero = 42;
        resolve(numero);   // devolver el numero
    });
}

obtenerNumero().then((resultado) => {
    console.log(resultado); // 42
});


// Async await
async function obtenerNumeroAsync(): Promise<number> {
    const numero = 42;
    return numero;
}

async function mostrarNumeroAsync() {
    const resultado = await obtenerNumeroAsync();
    console.log(resultado);
}

mostrarNumeroAsync();


//Promesa devolvendo un objeto Promise{}
function obtenerUsuario():Promise<{nombre:string; edad: number}>{
    return new Promise((resolve, reject) => {
        const usuario = {nombre: "Juan", edad: 30};
        resolve(usuario);  // deolver el objeto
    });
}

obtenerUsuario().then((usuario) => {
    console.log(usuario.nombre); // Juan
    console.log(usuario.edad); // 30
})



async function obtenerUsuarioAsync():Promise<{nombre:string; edad: number}>{
    return {nombre: "Juan", edad: 30};
}

async function mostrarUsuarioAsync() {
    const usuario = await obtenerUsuarioAsync();
    console.log(usuario.nombre); // Juan
    console.log(usuario.edad); // 30
}

mostrarUsuarioAsync();
// me devuelve el objeto directamente y la funcion mostrarUsuarioAsync usa await para obtener el objeto y luego imprimir
// las propiedades del objeto



//Promesa devolviendo un arreglo
function obtenerNumeros():Promise<number[]>{
    return new Promise((resolve, reject) => {
        return [1, 2, 3, 4, 5]; // devolver un arreglo de numeros

    });
}

obtenerNumeros().then((numeros) => {
   console.log(numeros); 
})


//crear promises con retorno void
function procesoCompleto(): Promise<void> {
    return new Promise((resolve) => {
        console.log("Proceso completo");
        resolve();  // no devuelve nada
    });
 }

procesoCompleto().then(() => {
    console.log("Finalizado...");
});


//una promesa me duvuelva otra promesa =  se le conoce como encadenamiento de promesas

function obtenerPromesaAnidada(): Promise<Promise<string>> {
    return new Promise((resolve) => {
        const promesaInterna = new Promise<string>((resolveInterno) => {
            resolveInterno("Resultado depromesa interna");
        });
    resolve(promesaInterna);
    });
}

obtenerPromesaAnidada().then((promesa) => {
    promesa.then((resultado) => console.log(resultado));  //resultado de la promesa interna
});







