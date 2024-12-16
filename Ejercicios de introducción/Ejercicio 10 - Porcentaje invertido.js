/* Realizá un programa que permita al usuario ingresar los nombres de tres inversores junto al 
capital invertido por cada uno. La computadora debe informar qué porcentaje del total aportó cada 
uno y cuál es el monto del total aportado entre los tres. */

let inversorUno;
let aporteUno;
let porcentajeUno;
let inversorDos;
let aporteDos;
let porcentajeDos;
let inversorTres;
let aporteTres;
let porcentajeTres;
let capitalTotal;

inversorUno = prompt("Nombre del inversor: ");
aporteUno = parseFloat(prompt("Capital invertido: "));

inversorDos = prompt("Nombre del inversor: ");
aporteDos = parseFloat(prompt("Capital invertido: "));

inversorTres = prompt("Nombre del inversor: ");
aporteTres = parseFloat(prompt("Capital invertido: "));

capitalTotal = aporteUno + aporteDos + aporteTres;

porcentajeUno = (aporteUno * 100)/capitalTotal;
porcentajeDos = (aporteDos * 100)/capitalTotal;
porcentajeTres = (aporteTres * 100)/capitalTotal;

console.log("Capital total invertido: " + capitalTotal);
console.log(inversorUno + " aporto un porcentaje de capital del " + porcentajeUno + "%");
console.log(inversorDos + " aporto un porcentaje de capital del " + porcentajeDos + "%");
console.log(inversorTres + " aporto un porcentaje de capital del " + porcentajeTres + "%");