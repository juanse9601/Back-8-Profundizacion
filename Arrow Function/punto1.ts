const pedidos = [ 
    { nombreCliente: "Juan", tipo: "comida", precio: 15, cantidad: 2 },
    {nombreCliente: "Maria", tipo: "bebida", precio: 5, cantidad: 1 },
    {nombreCliente: "Pedro", tipo: "comida", precio: 12, cantidad: 3 },
    {nombreCliente: "Ana", tipo: "Bedida", precio: 7, cantidad: 2 }
];

// arrow function anonima para calcular el total de cada pedido precio * cantidad
const totalesPedidos = pedidos.map(x => x.precio * x.cantidad); // recorre el array original y nos daun nuevo array con los resultados de la operacion
console.log("Totales por pedido: " , totalesPedidos);

// arrow function anonima para filtrar solo los pedidos de comida
const pedidosComida = pedidos.filter(pedido => pedido.tipo == "comida");
console.log("Pedidos de comida: ", pedidosComida);
    
// crear funcion nombrada tipo flecha calcular el costo total de todos los pedidos
const calcularTotal = () => {
    return pedidos.reduce((suma,pedido)=> suma + (pedido.precio * pedido.cantidad),0) // acumulativo 
};

console.log("Costo total de todos los pedidos: " , calcularTotal());

// arrow function nombrada para mostrar un resumen de los pedidos
const mostrarResumen = () =>{
    console.log("Resumen Pedidos: ")
    pedidos.forEach(pedido => {
        console.log(pedido.nombreCliente , "ha pedido " , pedido.cantidad , pedido.tipo , "por un total de ", pedido.precio * pedido.cantidad , "dolares. ")
    });

};

mostrarResumen();