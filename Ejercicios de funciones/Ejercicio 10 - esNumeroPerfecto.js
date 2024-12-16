/* esNumeroPerfecto,  que  devuelva  si  un 
número entero dado como parámetro es o no 
perfecto. */

// Los primeros cuatro numeros perfectos son el 6, el 28, el 496 y el 8128

function esNumeroPerfecto(x){

    let acumulador = 0;

    for(let i = 1; i < x; i++){
        if(x%i == 0){
            acumulador = acumulador + i;
        }
    }

    if(acumulador == x){
        console.log("Es numero perfecto");
    }

}

let numero = parseInt(prompt("Ingrese un numero: "));

esNumeroPerfecto(numero);