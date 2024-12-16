/* Realizá un programa que permita al usuario ingresar números hasta que se introduzca un 0. La 
computadora debe mostrar el número máximo y el número mínimo. */

let numero = parseInt(prompt("Ingrese un numero (0 para salir): "));
let maximo = 0;
let minimo = 999999;

while (numero != 0) {

    numero = parseInt(prompt("Ingrese un numero (0 para salir): "));

    if (numero != 0) {
        if (numero > maximo) {
            maximo = numero;
        }
        if (minimo > numero) {
            minimo = numero;
        }
    }
}

console.log(maximo);
console.log(minimo);