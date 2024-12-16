/* Realizá un programa que permita al usuario ingresar un número entero cant. Acto seguido, que 
permita ingresar cant números reales, correspondientes a las ventas realizadas por cierto 
vendedor. La computadora debe mostrar el total de las ventas. */

let cant = parseInt(prompt("Ingrese la cantidad de productos vendidos: "));
let precios;
let acum = 0.0;

for(let i = 0; i < cant; i++){

    precios = parseFloat(prompt("Ingrese el monto del producto " + (i+1) + ": "));
    acum = acum + precios;

}

console.log("Total generado por el vendedor: $" + acum);