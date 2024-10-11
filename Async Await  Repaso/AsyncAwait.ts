// funcion simple asincrona

async function greet(){
    return "Hola Mundo"
}

// USo de await
async function main(){
    const message = await greet();
    console.log(message);  // Hola Mundo
} 

main();

// uso de timeout para simular un delay 
// funcion que simular un delay de 2 segundos antes de retornar un mensaje
async function greetDelay(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Hola mundo despues de 2 segundos")
        }, 2000);
        
    });
}

async function mainDelay(){
    const message = await greetDelay(); // esperamos el eresultado despues de 2 segundos
    console.log(message); // Hola mundo despues de 2 segundos
} 

mainDelay();


//manejo de errores con try- catch
//Funcion quesimula uan operacion que puede fallar
async function greetError(){
    return new Promise((resolve, reject) => {
        const error = true; // simulamos un error
        if(error){
            reject("Error en la funcion greetError");
        } else{
            resolve("Datos obtenidos correctamete");
        }
        
    });
}

async function mainError(){
    try{
        const data = await greetError();
        console.log(data);
    } catch(error){
        console.log(error);  //muestra el error al obtener los datos
    }
}

mainError();


//multiples await
//Funciones asincronas simulando operaciones
async function getUser(){
    return "Usuario obtenido";
}

async function getOrders(){
    return "Ordenes obtenidas";
}

async function getUserAndOrders(){
    const user = await getUser();  // espeamos obtener el usuario
    const orders = await getOrders(); // esperamos obtener las ordenes
    console.log(user, orders); // Usuario obtenido Ordenes obtenidas
}

getUserAndOrders();


// uso de Promise.all para ejecutar tareas en paralelo
// funciones que simulan operaciones asincronas
async function getUser1(){
    return "Usuario 1";
}

async function getOrders1(){
    return "ordenes 1";
}

async function getAllData(){
    const [data1, data2] = await Promise.all([getUser1(), getOrders1()]); // Ejecutamos las funciones en paralelo
    console.log(data1, data2); // mostramos "Usuario 1" y "ordenes 1";
}



// Ejemplo de funcion acincrona que manipula objetos
// Funcion que devuelva infrormacion de un usuario
async function getUserInfo(){
    return {
        name: "Juan",
        age: 30,
        email: "juan@gmail.com"
    }
}

async function showUserInfo(){
    const user = await getUserInfo(); // obtenemos la informacion del usuario
    console.log(user); // mostramos la informacion del usuario
}

showUserInfo();


// await en un for
//Funcion que simula la operacion asincrona para cada item 

async function processItem( item : number){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("procesado item " + item ), 5000;
        });
    
    });
}

async function processItems(items : number[]){
    for(const item of items){
        const result = await processItem(item); // esperamos procesar cada item antes de continuar
        console.log(result); // procesado item : X
    }
}
    

//OPERACINES CONCIONACON OBJETOS
//sIMLAR PERAIONDE DE UN INVENTARIO DE AUTOS

const cars = [
    {
        id:1,
        modelo: "Toyota",
        available:"true"
    },
    {
        id:2,
        modelo: "HONDA",
        available:"false"
    }
];  


// funcion que verifica la diponibilidad de un auto
async function checkAvailability(id : number){
    return new Promise((resolve, reject) => {
        const car = cars.find(car => car.id === id);
        if(!car){
            reject("No se encontro el auto con id " + id);
        }else if(!car.available){
            reject("El auto no esta disponible");
        } else{
            resolve("El auto esta disponible");
        }

        
        
    });
}

async function reservaCar(id: number){
    try{
        const message = await checkAvailability(id);
        console.log(message);   // muestra si el auto esta disponible o no
        //logica de la

    } catch(error){
        console.log(error);  // muestra el error si el auto no esta disponible o no existe
    }
}

reservaCar(1);
reservaCar(4);
    
// funcion asincrona simple
// como usar el timeout para simular operaciones asincronas
//Introducimos manejo de errores try catch
//usamos multiples await en la misma funcion
//introduciomos Promise.all para ejecutar funcions en paralelo
//como trabajar con objetos
//usamos await en un for
// simulaos varias operaciones encadenads
// combinamos logica condicional co obetos y el manejo de errores