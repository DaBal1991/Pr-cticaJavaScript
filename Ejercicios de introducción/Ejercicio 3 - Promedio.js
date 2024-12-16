/* Realizá un programa que permita al usuario ingresar 3 notas pertenecientes a tres trimestres 
distintos para cierto alumno. La computadora debe mostrar la nota promedio. */

let notaUno;
let notaDos;
let notaTres;
let promedio;

notaUno = parseFloat(prompt("Nota del primer trimestre: "));
notaDos = parseFloat(prompt("Nota del segundo trimestre: "));
notaTres = parseFloat(prompt("Nota del tercer trimestre: "));
promedio = (notaUno + notaDos + notaTres)/3;

console.log("Promedio del alumno: " + promedio);