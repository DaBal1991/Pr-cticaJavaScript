/* Realizá un programa que permita al usuario ingresar una letra, correspondiente a un dígito del 
sistema de numeración romano. La computadora debe mostrar su correspondiente valor decimal. 
Si  se  ingresa  una  letra  inexistente,  la  computadora  debe  informar  que  no  existe  tal  dígito. 

Los símbolos de numeración romana y sus valores son: I (1), V (5), X (10), L (50), C (100), D (500), M (1000).*/

let letra;

letra = prompt("Ingrese una letra del sistema de numeracion romano para conocer su equivalente en decimal: ");

switch(letra){
    case "I":
    case "i":
        console.log("1");
        break;
    case "V":
    case "v":
        console.log("5");
        break;
    case "X":
    case "x":
        console.log("10");
        break;
    case "L":
    case "l":
        console.log("50");
        break;
    case "C":
    case "c":
        console.log("100");
        break;
    case "D":
    case "d":
        console.log("500");
        break;
    case "M":
    case "m":
        console.log("1000");
        break;
    default:
        console.log("Inexistente en el sistema de numeracion romano...");
        break;
}