const productosDisponibles = ["laptop", "mouse", "teclado"];

function realizarPedido(producto) {
    return new Promise((resolve, reject) => {
        console.log("Revisando disponibilidad del producto...");
        setTimeout(() => {
            if (productosDisponibles.includes(producto)) {
                resolve("Producto disponible, procesando pedido...");
        }else{
            reject("Producto no disponible, no esta en el stock.");
        }
            
    }, 2000);
});
}

realizarPedido("teclado")
.then((mensaje) => console.log(mensaje))
.catch((error) => console.log(error));


realizarPedido("audifonos")
.then((mensaje) => console.log(mensaje))
.catch((error) => console.log(error));