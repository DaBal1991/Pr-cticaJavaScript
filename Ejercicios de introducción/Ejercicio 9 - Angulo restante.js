/* Realizá un programa que permita al usuario ingresar dos números enteros, que representan las 
medidas en grados de dos ángulos interiores de cierto triángulo. La computadora debe mostrar el 
valor en grados del ángulo restante. */

const sumaAngulosTriangulo = 180;
let anguloUno;
let anguloDos;
let anguloRestante;

anguloUno = parseInt(prompt("Ingrese el valor del primer angulo: "));
anguloDos = parseInt(prompt("Ingrese el valor del segundo angulo: "));

console.log("Valor del angulo restante: " + (sumaAngulosTriangulo - (anguloUno + anguloDos)) + "°");