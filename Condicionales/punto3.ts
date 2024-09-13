function sueldoPromedio(sueldos: number[]):number{

    const sumaSueldos = sueldos.reduce((acumulado, sueldo)=>acumulado + sueldo, 0);

    return sumaSueldos / sueldos.length;

}

const sueldos = [1500,1800,2000,1700,1600];

const promedio = sueldoPromedio(sueldos);

console.log("El sueldo promedio es: " , promedio)