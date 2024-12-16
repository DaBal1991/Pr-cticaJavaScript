/* Realizá un programa que permita al usuario ingresar la cantidad de inscriptos a una conferencia 
y la cantidad de asientos disponibles el auditorio. La computadora debe indicar si alcanzan los 
asientos, en caso contrario, indicar cuántos faltan para que todos los inscriptos puedan sentarse. */

let inscriptos;
let cantidadAsientos;
let asientosNecesarios;

inscriptos = parseInt(prompt("Ingrese la cantidad de inscriptos: "));
cantidadAsientos = parseInt(prompt("Ingrese la cantidad de asientos disponibles: "));

if(cantidadAsientos == inscriptos){
    console.log("Capacidad al máximo");
}else if(inscriptos > cantidadAsientos){
    asientosNecesarios = inscriptos - cantidadAsientos;

    console.log("Faltan " + asientosNecesarios + " asiento para que todos puedan sentarse en la conferencia");
}else{
    asientosNecesarios = cantidadAsientos - inscriptos;

    console.log("Quedan " + asientosNecesarios + " asientos libres");
}