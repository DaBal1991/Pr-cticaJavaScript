/* Realizá  un  programa  que  permita  validar  una  nota  de  examen.  Se  espera  que  la  nota  que  el 
usuario ingrese sea un número comprendido entre 0 y 10. La misma debe ser tantas veces ingresada 
como sean necesarias hasta que quede comprendida dentro del rango descripto. */

let nota = parseInt(prompt("Ingrese una nota: "));

while((nota < 0) || (nota > 10)){
    nota = parseInt(prompt("NOTA NO VALIDA. Reingrese la nota: "));
}

console.log(nota);