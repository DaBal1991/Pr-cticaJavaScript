/* Realizá un programa que permita al usuario ingresar 12 valores, de a uno por vez, que 
representan  los  sueldos  mensuales  que percibió  un empleado  durante un  año. Si  durante  la  carga 
de los sueldos mensuales se detecta un valor negativo, esto indica que aún no se ha cobrado el mes 
en  curso,  por  lo  tanto,  deben  dejar  de  ingresarse  datos.  La  computadora  debe  mostrar  el  sueldo 
anual percibido (total o parcial). */

let sueldo;
let acumulador = 0.0;

for(let i = 1; i <= 12; i++){

    sueldo = parseFloat(prompt("Ingrese el sueldo mensual: "));

    if(sueldo < 0){
        i = 12;
    }else{
        acumulador = acumulador + sueldo;
    }

}

console.log("Sueldo anual percibido: " + acumulador);