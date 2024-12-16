/* esVocal, que devuelva si un caracter dado 
como parámetro es o no una letra vocal 
(contemplar mayúsculas y minúsculas). */

function esVocal(letra){
    switch(letra){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            console.log("Es vocal");
            break;
        default:
            console.log("No es vocal");
            break;
    }
}

let letra = prompt("Ingrese una letra: ");

esVocal(letra);