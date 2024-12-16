/*  Realizá un programa que permita al usuario ingresar personas (para cada una, nombre y edad). 
La carga termina cuando en el nombre de la persona se ingresa un asterisco ('*'). La computadora 
debe indicar cómo se llama la persona más joven. */

let nombre;
let edad;
let edadMenor = 0;
let aux = 999;
let personaMenor;

do{

    nombre = prompt("Ingrese un nombre: ");
    edad = parseInt(prompt("Ingrese la edad: ")); 

    if(edad < aux){
        edadMenor = edad;
        aux = edadMenor;
        
        if(nombre != "*"){
            personaMenor = nombre;
        }
    }

}while(nombre != "*");

console.log("El mas joven es " + personaMenor + " con " + edadMenor + " años.");