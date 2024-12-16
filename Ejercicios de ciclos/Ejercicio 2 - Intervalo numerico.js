/*  Realizá un programa que permita al usuario ingresar dos números enteros num1 y num2, donde el 
primero siempre deberá ser menor o igual al segundo. La computadora debe mostrar la secuencia 
de números existentes entre ambos:
A)  Incluyéndolos; 
B)  Excluyéndolos. */

let X = parseFloat(prompt("Ingrese un numero: "));
let Y = parseFloat(prompt("Ingrese otro numero: ")); 

if(X <= Y){

    console.log("Incluyendo los extremos...");
    for(let i = X; i <= Y; i++){
        console.log(i);
    }

    console.log("Excluyendo los extremos...");
    for(let i = X+1; i < Y; i++){
        console.log(i);
    }
}else{
    console.log("El valor del primer numero debe ser menor que el del segundo!");
}