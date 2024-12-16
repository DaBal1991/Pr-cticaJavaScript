/* Realizá un programa que permita al usuario ingresar tres números enteros. La computadora debe 
indicar cuál de ellos es el mayor */

let X;
let Y;
let Z;

X = parseInt(prompt("Ingrese un numero: "));
Y = parseInt(prompt("Ingrese otro numero: "));
Z = parseInt(prompt("Ingrese otro numero mas: "));

if(X > Y && X > Z){
    console.log(X + " es mayor que " + Y + " y que " + Z);
}else if(Y > X && Y > Z){
    console.log(Y + " es mayor que " + X + " y que " + Z);
}else{
    console.log(Z + " es mayor que " + X + " y que " + Y);
}