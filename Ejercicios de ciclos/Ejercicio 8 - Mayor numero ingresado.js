/* Realizá un programa que permita al usuario ingresar un número entero cant. Acto seguido, que 
permita ingresar cant números enteros. La computadora debe mostrar cuál fue el mayor número y 
en qué posición apareció. */

let cant = parseInt(prompt("Cantidad de numeros a ingresar: "));
let numero;
let mayor = 0;
let aux;
let pos;

for(let i = 0; i < cant; i++){

    numero = parseFloat(prompt("Ingrese un numero: "));

    if(numero > mayor){
        mayor = numero;
        pos = i+1;
    }
    
}

console.log("El mayor numero ingresado fue el " + mayor + " en la posicion numero: " + pos);