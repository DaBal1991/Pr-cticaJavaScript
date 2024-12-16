/* Realizá  un  programa  que  permita  al  usuario  ingresar  la  cantidad  de  cierto  artículo  y  el  precio 
unitario de dicho artículo. Por cada carga debe preguntar si se desea seguir ingresando de la forma 
"¿Deseás ingresar otro artículo? [S/N]". La carga de datos finaliza cuando se detecta una 
'n'  o  'N'.  Reutilizá  el  algoritmo  realizado  en  el  ejercicio  12)  para  validar  la  opción  ingresada.  La 
computadora debe mostrar el monto total del ticket */

let acumulador = 0.0;
let precioCantidad = 0.0;

do{

    cantProducto = parseInt(prompt("Ingrese la cantidad del artículo: "));

    prodPrecio = parseFloat(prompt("Ingrese el valor unitario del artículo: "));

    precioCantidad = cantProducto*prodPrecio;
    acumulador = acumulador + precioCantidad;

    continuar = prompt("¿Deseás ingresar otro artículo? [S/N]");

    while((continuar != "S" && continuar != "N") && (continuar != "s" && continuar != "n")){
        continuar = prompt("¿Deseás ingresar otro artículo? [S/N]");
    }

}while((continuar == "S") || (continuar == "s"));

console.log("Monto total del ticket: " + acumulador);
