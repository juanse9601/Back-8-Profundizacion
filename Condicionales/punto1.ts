function numeroMedio(a:number,b:number,c:number): number{

    if ((a > b && a < c ) || (a > c && a < b)){
        return a;
    } else if((b > a && b < c) || (b > c && b < a)){
        return b;
    } else {
        return c;
    }

}

const medio = numeroMedio(5,10,8);

console.log("El numero del medio es:" + medio)