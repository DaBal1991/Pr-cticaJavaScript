/* Realizá  un  programa  que  permita  al  usuario  ingresar  números  enteros.  Por  cada  carga  debe 
preguntar si se desea seguir ingresando, de la forma "¿Deseás ingresar otro número? [S/N]". 
La  carga  de  datos  finaliza  cuando  se  detecta  una  'n'  o  'N'.  Reutilizá  el  algoritmo  realizado  en  el 
ejercicio  12)  para  validar  la  opción  ingresada.  La  computadora  debe  mostrar  el  porcentaje  de 
números pares ingresados. */

let numero;
let continuar;
let i = 0;
let j = 0;
let porcentajePar = 0.0;

do{

    numero = parseFloat(prompt("Ingrese un numero: "));

    continuar = prompt("¿Deseás ingresar otro número? [S/N]");

    while((continuar != "S" && continuar != "N") && (continuar != "s" && continuar != "n")){
        continuar = prompt("¿Deseás ingresar otro número? [S/N]");
    }

    if(numero%2 == 0){
        i++;
    }else{
        j++;
    }

    porcentajePar = ((i*100)/(j+i));

}while((continuar == "S") || (continuar == "s"));

console.log("Porcentaje de numeros pares ingresados: " + porcentajePar + "%");
