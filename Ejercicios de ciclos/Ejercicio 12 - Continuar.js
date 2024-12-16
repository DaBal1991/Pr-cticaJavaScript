/* Realizá un programa que permita validar una opción ingresada. La computadora preguntará al 
usuario si desea continuar una operación de la forma  "¿Deseás continuar? [S/N]". Se espera 
que el usuario ingrese  una  'S'  o una  'N' (incluir las minúsculas). La opción debe ser tantas veces 
ingresada como sean necesarias hasta que quede comprendida dentro de las posibilidades 
esperadas.  Realizá  este  ejercicio  en  dos  versiones:  con  ciclo  while  y  con  ciclo  do-while. */

let continuar = prompt("¿Deseás continuar? [S/N]");

while((continuar != "S") && (continuar != "N") && (continuar != "s") && (continuar != "n")){
    continuar = prompt("Opcion invalida...¿Deseás continuar? [S/N]");
}

do{

    continuar = prompt("¿Deseás continuar? [S/N]");

}while((continuar != "S") && (continuar != "N") && (continuar != "s") && (continuar != "n"))