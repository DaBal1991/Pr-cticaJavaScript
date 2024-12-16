/* esMultiplo,  que  devuelva  si  un  número 
entero  es  múltiplo  de  otro.  Ambos  son  dados 
como parámetros. */

function esMultiplo(x, y){

    if(x%y == 0){
        console.log(x + " es multiplo de " + y);
    }else{
        console.log(x + " no es multiplo de " + y);
    }

}

let numero = parseInt(prompt("Ingrese un numero: "));
let otroNumero = parseInt(prompt("Ingrese otro numero: "));

esMultiplo(numero, otroNumero);