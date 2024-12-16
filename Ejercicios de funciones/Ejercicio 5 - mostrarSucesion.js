/*  mostrarSucesion, que imprima por 
consola la sucesión de números inclusiva 
entre a y b, dados como parámetros.  */

function mostrarSucesion(x, y){

    if(x > y){
        for(let i = y; i <= x; i++){
            console.log(i);
        }
    }else{
        for(let i = x; i <= y; i++){
            console.log(i);
        }
    }
    
}

let numero = parseInt(prompt("Ingrese un numero: "));
let otroNumero = parseInt(prompt("Ingrese otro numero: "));

mostrarSucesion(numero, otroNumero);