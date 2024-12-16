/* Realizá  un  programa  que  permita  al  usuario  ingresar  5  edades.  La  computadora  debe  indicar 
cuántas edades fueron valores impares mayores que 18. */

let edad;
let k = 0;

for(let i = 0; i < 5; i++){
    let edad = parseInt(prompt(i+1 + ") " + "Ingrese la edad: "));

    if((edad%2 != 0) && (edad > 18)){
        k++;
    }
}

console.log("Edades impares mayores que 18: " + k);