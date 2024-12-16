/*  Realizá un programa que permita al usuario ingresar tres números. La computadora debe 
mostrarlos ordenados de menor a mayor. */

let X;
let Y;
let Z;

X = parseInt(prompt("Ingrese un numero: "));
Y = parseInt(prompt("Ingrese un numero: "));
Z = parseInt(prompt("Ingrese un numero: "));

/*

XYZ YXZ YZX

YXZ XYZ XZY

ZXY YZX YXZ

*/

if(X > Y && Y > Z){ // XYZ
    console.log(Z + "," + Y + "," + X);
}else if(Y > X && X > Z){ // YXZ
    console.log(Z + "," + X + "," + Y);
}else if(Y > Z && Z > X){ // YZX
    console.log(X + "," + Z + "," + Y);
}else if(X > Z && Z > Y){ // XZY
    console.log(Y + "," + Z + "," + X);
}else if(Z > Y && Y > X){ // ZYX
    console.log(X + "," + Y + "," + Z);
}else{ //ZXY
    console.log(Y + "," + X + "," + Z);
}
