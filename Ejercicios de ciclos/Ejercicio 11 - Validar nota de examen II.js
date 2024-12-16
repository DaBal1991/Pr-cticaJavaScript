/* Realizá  un  programa  que  permita  validar  una  nota  de  examen  de  la  misma  manera  que  el 
ejercicio anterior, pero con las siguientes nuevas directivas:

▪ La nota 0 se reserva para los ausentes. 
▪ Las notas 1 y 3 no se suelen poner nunca. 

En  resumen,  las  notas  válidas  deberán  ser  el  2  y  el  rango  comprendido  entre  el  4  y  el  10.
*/

let nota = parseInt(prompt("Ingrese una nota: "));

while(nota != 2 || !(nota > 4 && nota < 10)) {
    if(nota == 0){
        nota = parseInt(prompt("AUSENTE. Reingrese la nota: "));
    }
    if(nota == 1 || nota == 3){
        nota = parseInt(prompt("NOTA NO VALIDA. Reingrese la nota: "));
    }
    if(nota > 10){
        nota = parseInt(prompt("NOTA NO VALIDA. Reingrese la nota: "));
    }
    if(nota < 0){
        nota = parseInt(prompt("NOTA NO VALIDA. Reingrese la nota: "));
    }
}

console.log(nota);
