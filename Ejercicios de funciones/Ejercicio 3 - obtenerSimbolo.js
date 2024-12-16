/* imprimirSimbolo, que imprima por 
consola n veces un caracter en la misma línea. 
Tanto n como el caracter se reciben como 
parámetro. */

function imprimirSimbolo(n, sim){

    for(let i = 0; i < n; i++){
        console.log(sim);
    }

}

let simbolo = (prompt("Ingrese un caracter para imprimir: "));
let cant = (parseInt(prompt("Ingrese la cantidad de veces que se debe repetir: ")));

imprimirSimbolo(cant, simbolo);