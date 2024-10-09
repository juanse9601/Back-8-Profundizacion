type Apuesta = {
    jugador:string,
    monto:number,
    probabilidad:number,   //  0 y 1
    gano:boolean

};

const apuestas: Apuesta[] =[ 
    {jugador:"Juan", monto:100, probabilidad:0.5,gano:true},
    {jugador:"Pedro", monto:200, probabilidad:0.5,gano:false},
    {jugador:"Ana", monto:300, probabilidad:0.5,gano:true},
    {jugador:"Maria", monto:400, probabilidad:0.5,gano:false},

];

const calcularGanancia = (apuesta:Apuesta):number => { 
    return apuesta.gano ? apuesta.monto *(1 / apuesta.probabilidad) : -apuesta.monto;

}

apuestas.forEach(apuesta => {
    const ganancia = calcularGanancia(apuesta);
    const resultado = apuesta.gano ? "Gano" : "Perdio";
    console.log(`${apuesta.jugador}, resultado: ${resultado}, ganancia: ${ganancia}`);
});



const ganadores = apuestas.filter(apuesta => apuesta.gano);

console.log("Jugadores que ganaron");

ganadores.forEach((apuesta) =>{
    console.log(apuesta.jugador, "ganancia", calcularGanancia(apuesta));
});

//version 2016
for (let x of pedidos) {
    console.log(x.articulos.filter(x => x.precio > 500));
}

//version 2019
const respuesta = pedidos.map(x => x.articulos).flat().filter(x => x.precio > 500);