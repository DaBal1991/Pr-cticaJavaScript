/* Realizá un programa que permita al usuario ingresar un número natural n. La computadora debe 
mostrar  los  primeros  n  múltiplos  de  3  excepto  aquellos  que  sean  a  la  vez  múltiplos  de  5. */

let numero = parseInt(prompt("Ingrese un numero: "));

for(let i = 0; i <= numero; i++){
    if(i%3 == 0){
        console.log(i);
    }else if((i%3) && (i%5)){
        i++;
    }
}
