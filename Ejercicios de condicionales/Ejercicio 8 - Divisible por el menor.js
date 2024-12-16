/* Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe 
indicar si el mayor es divisible por el menor. */

let X;
let Y;

X = parseInt(prompt("Ingrese un numero: "));
Y = parseInt(prompt("Ingrese un numero: "));

if(X > Y){
    if(X%Y == 0){
        console.log(X + " es divisible por " + Y);
    }else{
        console.log(X + " no es divisible por " + Y);
    }
}else{
    if(Y%X == 0){
        console.log(Y + " es divisible por " + X);
    }else{
        console.log(Y + " no es divisible por " + X);
    }
}