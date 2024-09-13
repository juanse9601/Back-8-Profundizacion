function rangoNumero(n: number): void{

    if(n < 0){
        console.log("El numero es negativo");
    }else if (n >= 0 && n <= 10){
        console.log("Elnumero esta entre 0 y 10");
    }else if (n >= 11 && n <= 20){
        console.log("Elnumero esta entre 11 y 20");
    }else if (n >= 21 && n <= 30){
        console.log("Elnumero esta entre 21 y 30");
    }else if (n >= 31 && n <= 50){
        console.log("Elnumero esta entre 31 y 50"); 
    } else{
        console.log("El numero es mayor que 50")
    }    

}

rangoNumero(9);