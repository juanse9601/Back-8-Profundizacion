type CuentaBancaria = {
    titular:string,
    saldo:number
};

//Funcion que simula la verificacion de saldo
const verificarSaldo = (cuenta:CuentaBancaria, monto:number, callback:(error: string  | null,
     esAprobado: boolean) => void): void => {

        if (cuenta.saldo >= monto) {
            callback(null, true); // suficiiente saldo
        }else{
            callback("No hay suficiente saldo", false); // no hay suficiente saldo
        }    

};


//Funcion para realizar el retiro si se aprueba la verficacion
const realizarRetiro = (cuenta: CuentaBancaria, monto:number, callback:(mensaje: string) => void): void => {

    verificarSaldo(cuenta,monto,(error, esAprobado) => {
        if (esAprobado) {
            cuenta.saldo -= monto;
            callback("Retiro exitoso . Nuevo saldo:" + cuenta.saldo);
        } else{
            callback("error: " + error);
            
        }


});
};

//Ejemplo de uso
const miCuenta: CuentaBancaria = {titular:"Juan", saldo:500};

realizarRetiro(miCuenta, 100, (mensaje) => {
    console.log(mensaje);
});

realizarRetiro(miCuenta,700, (mensaje) => {        
    console.log(mensaje);
});

