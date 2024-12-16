/* Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe 
indicar cuál de ellos es el mayor. */

let X;
let Y;

X = parseInt(prompt("Ingrese un numero: "));
Y = parseInt(prompt("Ingrese otro numero: "));


if(X > Y){
    console.log(X + " es mayor que " + Y);
}else{
    console.log(Y + " es mayor que " + X);
}