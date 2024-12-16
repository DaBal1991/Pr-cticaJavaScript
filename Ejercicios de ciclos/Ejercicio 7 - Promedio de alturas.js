/* Realizá un programa que permita al usuario ingresar un número entero cant. Acto seguido, que 
permita ingresar cant números reales, correspondientes a las estaturas de un equipo de jugadores 
de baloncesto (en metros). La computadora debe mostrar la estatura promedio. */

let cant = parseInt(prompt("¿Cuantas estaturas ingresara?"));
let altura;
let acum = 0;
let promedio = 0;

for(let i = 0; i < cant; i++){

    altura = parseFloat(prompt("Ingrese la altura: "));
    acum = acum + altura;

    promedio = acum/cant;
}

console.log("Promedio de estaturas: " + promedio + " m");