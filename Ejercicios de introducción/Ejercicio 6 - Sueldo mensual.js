/* Realizá un programa que permita al usuario ingresar el valor unitario de cierto artículo y la 
cantidad de artículos vendidos por un vendedor, del cual se sabe que gana un sueldo fijo de $14000 
más el 16% del monto total vendido. Con tales datos, la computadora debe calcular el sueldo 
mensual del vendedor y mostrarlo. */

const SUELDO = 14000;
let valorUnitario;
let cantidadVendida;
let bonus;
let sueldoFinal;

valorUnitario = parseFloat(prompt("Ingrese el valor unitario del producto: "));
cantidadVendida = parseInt(prompt("Ingrese la cantidad vendida: "));

bonus = (cantidadVendida*valorUnitario) * 0.16;

sueldoFinal = SUELDO + bonus;

console.log("Sueldo mensual del empleado: " + sueldoFinal);
