/* Realizá un programa que permita al usuario ingresar un número entero. La computadora debe 
informar el número opuesto y el número inverso del ingresado. */

let numero;
let numeroOpuesto;
let numeroInverso;

numero = prompt("Ingrese un numero: ");
numeroOpuesto = numero*-1;
numeroInverso = 1/numero;

console.log("El numero ingresado es: " + numero);
console.log("El numero opuesto es: " + numeroOpuesto);
console.log("El numero inverso es: " + numeroInverso);
