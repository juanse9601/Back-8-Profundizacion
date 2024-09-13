function calculadoraSimple(a:number,b:number, operacion:string): void{

    switch(operacion){
        case "suma":
            console.log("Suma : " , (a + b))
            break 
        case "resta":
            console.log("Resta : " , (a - b))
            break
        case "multiplicacion":
            console.log("multiplicacion : " , (a * b))
            break   
        case "division":
            if(b != 0){
                console.log("Division: " ,(a/b))
            } else{
                console.log("No se puede dicidir por 0")
            }
            break
            
        default:
            console.log("Operacion invalida")    
    }

}

calculadoraSimple(10,5,"multiplicacion")