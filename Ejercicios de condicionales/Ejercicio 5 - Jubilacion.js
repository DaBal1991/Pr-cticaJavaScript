/* Realizá un programa que permita al usuario ingresar su edad (entre 1 y 120 años) y su género 
('F' para mujeres, 'M' para hombres). La computadora debe indicar si la persona está en edad de 
jubilarse.
. En caso de haber ingresado valores erróneos (edad fuera de rango o género inválido), 
informar tal situación. */

let edad;
let genero;

edad = parseInt(prompt("Ingrese la edad: "));
genero = prompt("Ingrese el genero 'M' o 'F': ");

if(genero != "M" && genero != "F"){
    console.log("Genero ingresado es invalido.");
}else if(edad > 120 || edad < 0){
    console.log("Edad ingresada es invalida.");
}else{

    if(edad >= 65 && genero == "M"){
        console.log("Puede jubilarse.");
    }else if(edad >= 60 && genero == "F"){
        console.log("Puede jubilarse.")
    }else{
        console.log("No puede jubilarse");
    }
}
