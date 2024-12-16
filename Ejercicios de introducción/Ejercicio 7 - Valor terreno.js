/* Realizá un programa que permita al usuario ingresar el ancho y el largo de un terreno en metros 
y el valor del metro cuadrado de tierra. La computadora debe mostrar el valor total del terreno y la 
cantidad de metros de alambre que serían necesarios para cercarlo completamente en tres pasadas. */

let ancho;
let largo;
let valorMetroCuadrado;
let valorTerreno;
let cantidadAlambre;

ancho = parseFloat(prompt("Ingrese el ancho del terreno: "));
largo = parseFloat(prompt("Ingrese el largo del terreno: "));
valorMetroCuadrado = parseFloat(prompt("Ingrese el valor del metro cuadrado: "));

valorTerreno = (largo*ancho)*valorMetroCuadrado;

cantidadAlambre = ((ancho*2) + (largo*2))*3;

console.log("Valor del terreno: " + valorTerreno);
console.log("Cantidad de metros de alambre necesarios para cercarlo en tres pasadas: " + cantidadAlambre);
