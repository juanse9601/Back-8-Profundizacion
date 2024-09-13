const productos = [
    {nombre:`Camisa`,stock: 3},
    {nombre:`Pantalon`,stock: 10,valor:1000},
    {nombre:`Zapatos`,stock: 4},
    {nombre:`Sombrero`,stock: 6}
];

for (let i = 0; i < productos.length; i++){
    const producto = productos[i];


    if (producto.stock < 5){
        console.log("Alerta! El producto", producto.nombre ,"tiene poco stock : ", producto.stock)
    }
}    