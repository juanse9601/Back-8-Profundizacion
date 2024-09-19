import { productos } from "./productos";

interface Producto {
    id: number;
    nombre: string;
    precio: number;
    disponible: boolean;
    categorias: string[];
}

//Funcion para mostrar todoslosproductosdisponibles
function mostrarProductosDisponibles(): void {
    const Disponibles = productos.filter(producto => producto.disponible);
    console.log("Productos Disponibles:");
    Disponibles.forEach(producto => {
        console.log(producto.nombre,producto.precio);
    });

}


//Funcion para agregar un nuevo producto
function agregarProducto(nuevoProducto: Producto): void {
    productos.push(nuevoProducto);
    console.log(nuevoProducto,"Producto agregado exitosamente");
}

//Funcion para calcular el precio promedio
function calcularPrecioPromedio(): number {
    const totalPrecio = productos.reduce((total, producto) => total + producto.precio, 0);
    return totalPrecio / productos.length;
}

//uso de las funciones
mostrarProductosDisponibles();

const nuevoProducto: Producto = {
    id: 4,
    nombre: "Monitor Dell",
    precio: 150.77,
    disponible: true,
    categorias: ["Electronica", "Pantallas"]
};

agregarProducto(nuevoProducto);
console.log(calcularPrecioPromedio());

