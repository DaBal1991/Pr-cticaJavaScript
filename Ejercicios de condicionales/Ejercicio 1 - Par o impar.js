/*  Realizá un programa que permita al usuario ingresar un número entero. La computadora debe 
indicar si se trata de un número par o impar. */

let numero;

numero = parseInt(prompt("Ingresar un numero: "));

if(numero%2 == 0){
    console.log("Es numero par");
}else{
    console.log("Es numero impar");
}