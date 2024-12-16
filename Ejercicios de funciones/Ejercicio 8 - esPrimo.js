/* esPrimo, que devuelva si un número 
entero dado como parámetro es o no primo. */

function esPrimo(x) {

    let contador = 0;
    let i = 1;

    while(i <= x){

        if(x%i == 0){
            contador++;
        }

        i++;
    }

    if(contador == 2){
        console.log("Es primo");
    }
    else{
        console.log("No es primo");
    }

}

let numero = parseInt(prompt("Ingrese un numero: "));

esPrimo(numero);