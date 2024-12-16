/* cantDivisores,  que  devuelva  la  cantidad 
de divisores que posea un número entero 
dado como parámetro. */

function cantDivisores(x){

    let contador = 0;

    for(let i = 1; i <= x; i++){
        if(x%i == 0){
            contador++;
        }
    }

    return contador;
}

let numero = parseInt(prompt("Ingrese un numero: "));

console.log("Tiene " + cantDivisores(numero) + " divisores");