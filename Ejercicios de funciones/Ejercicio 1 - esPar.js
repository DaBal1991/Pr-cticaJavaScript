/* esPar,  que  devuelva  si  un  número  entero 
dado como parámetro es par o no. */

function esPar(numero){
    if(numero%2 == 0){
        console.log("Es par");
    }else{
        console.log("No es par");
    }
}

let x = parseFloat(prompt("Ingrese un numero: "));

esPar(x);