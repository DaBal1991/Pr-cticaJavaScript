/* Realizá  un  programa  que  permita  al  usuario  ingresar  los  lados  a,  b  y  c  de  un  triángulo.  La 
computadora  informa  si  el  triángulo  es  o  no  válido.  En  caso  afirmativo,  además  informa  si  es 
equilátero, isósceles o escaleno. 

Según el teorema de desigualdad triangular, un triángulo es válido si se cumple que cada uno de los lados no puede ser 
más largo que la suma de los otros dos. 

Un triángulo equilátero es aquel que tiene sus tres lados iguales. Un triángulo isósceles es aquel que tiene dos de sus 
lados iguales. Un triángulo escaleno es aquel que tiene sus tres lados desiguales. */

let ladoUno;
let ladoDos;
let ladoTres;

ladoUno = parseFloat(prompt("Ingrese el valor del lado: "));
ladoDos = parseFloat(prompt("Ingrese el valor del lado: "));
ladoTres = parseFloat(prompt("Ingrese el valor del lado: "));

if(ladoUno < (ladoDos + ladoDos)){
    if(ladoDos < (ladoUno + ladoTres)){
        if(ladoTres < (ladoDos + ladoUno)){
            console.log("Es posible construir el triangulo");

            if((ladoUno != ladoDos) && (ladoUno != ladoTres)){
                console.log("Triangulo escaleno");
            }else if((ladoUno == ladoDos) && (ladoUno == ladoTres)){
                console.log("Triangulo equilatero");
            }else{
                console.log("Triangulo Isosceles");
            }
        }else{
            console.log("No es posible construir un triangulo...");
        }
    }else{
        console.log("No es posible construir un triangulo...");
    }
}else{
    console.log("No es posible construir un triangulo...");
}