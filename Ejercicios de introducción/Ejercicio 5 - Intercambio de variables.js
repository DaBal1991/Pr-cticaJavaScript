/* Realizá un programa que permita al usuario ingresar valores del mismo tipo para las variables a
y b. Una vez cargadas, la computadora debe mostrar ambas variables por pantalla, intercambiar 
entre sí sus valores (que lo cargado en a quede en b, y viceversa), y volver a mostrarlas. */

let A;
let B;
let aux;

A = prompt("Ingresar el valor de A: ");
B = prompt("Ingresar el valor de B: ");

console.log("Contenido de A: " + A);
console.log("Contenido de B: " + B);

console.group("***INTERCAMBIO DE VARIABLES***");

aux = A;
A = B;
B = aux;

console.log("Nuevo contenido de A: " + A);
console.log("Nuevo contenido de B: " + B);


