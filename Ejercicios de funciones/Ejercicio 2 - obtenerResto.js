/*  obtenerResto,  que  devuelva  el  resto  del 
cociente entre dos números enteros dados 
como parámetros (sin usar el operador %) */

// a - (n * floor(a/n)) <-- matematicamente el calculo del resto
// Math.floor() redondea hacia abajo y devuelve un entero proximo al numero recibido

function obtenerResto(dividendo, divisor){
    return dividendo - (divisor * Math.floor(dividendo/divisor));
}

let numero = parseInt(prompt("Ingrese el dividendo: "));
let otroNumero = parseInt(prompt("Ingrese el divisor: "));

let funcion = obtenerResto(numero, otroNumero);

console.log("Aplicando %: " + numero%otroNumero);
console.log("Empleando la funcion obtenerResto: " + funcion);