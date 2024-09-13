function operaciones(a:number,b: number): void {

    console.log("Suma: ", a+b)

    console.log("Resta:", (a-b))

    console.log("Multiplicacion:", (a*b))

    if (b != 0){

        console.log("Division:",(a/b))


    } else {
        console.log("Division: No se puede dividir por cero")
    }

}

operaciones(12,4);