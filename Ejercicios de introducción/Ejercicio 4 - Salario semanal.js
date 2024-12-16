/* Realizá un programa que permita al usuario ingresar el valor salarial de una hora de trabajo y la 
cantidad de horas trabajadas por día. La computadora debe mostrar el valor del salario semanal, 
asumiendo que trabaja todos los días hábiles y media jornada los sábados. */

let valorHora;
let horaTrabajada;
let salarioSemanal;

valorHora = parseInt(prompt("Ingrese el valor salarial de la hora de trabajo: "));
horaTrabajada = parseInt(prompt("Ingrese la cantidad de horas trabajadas en el dia: "));

salarioSemanal = ((horaTrabajada*valorHora)*5) + ((horaTrabajada/2)*valorHora);

console.log("Salario semanal = " + salarioSemanal);
