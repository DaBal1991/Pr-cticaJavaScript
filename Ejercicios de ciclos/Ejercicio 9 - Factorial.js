/* Realizá un programa que permita al usuario ingresar  un  número  natural. La computadora  debe 
mostrar el factorial del número. */

let numero = parseFloat(prompt("Ingrese un numero: "));
let factorial = 1;

for(let i = 1; i <= numero; i++){
    
    parseFloat(factorial = factorial *i);

}

console.log("Factorial de " + numero + " es " + factorial);
