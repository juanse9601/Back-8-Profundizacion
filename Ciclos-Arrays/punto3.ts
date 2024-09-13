const hotel = [
    {habitacion: 101, cliente: "Juan", reservada: true, pedidoEspecial:`Desayuno Vegano`},
    {habitacion: 102, cliente: "Ana", reservada: true, pedidoEspecial:``},
    {habitacion: 103, cliente: null, reservada: false, pedidoEspecial:``},
    {habitacion: 104, cliente: "Carlos", reservada: true, pedidoEspecial:`Vista al mar`},
    {habitacion: 105, cliente: null, reservada: false, pedidoEspecial:``}

];

let habitacionesDisponibles: number[] = [] // defino un array vacio para almacenar las habitaciones dispinibles

for (let i = 0; i < hotel.length; i++){
    const habitacion = hotel[i]

    if(habitacion.reservada){
        console.log("habitacion ", habitacion.habitacion ,"esta reservada por ", habitacion.cliente)

        if(habitacion.pedidoEspecial){
            console.log("Pedido especial para ", habitacion.cliente, habitacion.pedidoEspecial)
        }

    }else{
        habitacionesDisponibles.push(habitacion.habitacion)
    }

}

if (habitacionesDisponibles.length > 0){
    console.log("habitaciones disponibles: ", habitacionesDisponibles.join(`, `))
} else {
    console.log("No hay habitaciones disponibles.")
}