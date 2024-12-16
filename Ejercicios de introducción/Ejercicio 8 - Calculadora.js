/* Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe 
mostrar los resultados de las 4 operaciones matemáticas básicas con tales números. */

let operandoUno;
let operandoDos;

operandoUno = parseFloat(prompt("Ingrese el valor del primer numero"));
operandoDos = parseFloat(prompt("Ingrese el valor del segundo numero"));

console.log("Suma: " + (operandoUno + operandoDos));
console.log("Resta: " + (operandoUno - operandoDos));
console.log("Multiplicacion: " + (operandoUno*operandoDos));
console.log("Division: " + (operandoUno/operandoDos));