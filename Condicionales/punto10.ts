function encontrarNumeroValido():number{

    let numero: number;
    
    do {
        numero = Math.floor(Math.random() * 10000)
    } while (!(numero % 2 == 0 && numero % 5 != 0 && numero > 100 && numero < 10000)){
        return numero;
    }
}


console.log("El numero encontrado es: " , encontrarNumeroValido())