/* Realizá un programa que permita al usuario ingresar números mientras el promedio entre todos 
los  ingresados  sea  menor  a  20.  La  computadora  debe  indicar  la  cantidad  de  valores  leídos. */

let numero;
let promedio = 0;
let acumulador = 0;
let i = 0;

do{

    numero = parseInt(prompt("Ingrese un numero: "));

    i++;

    acumulador = acumulador + numero;

    promedio = acumulador/i;

}while(promedio < 20);

console.log(i);