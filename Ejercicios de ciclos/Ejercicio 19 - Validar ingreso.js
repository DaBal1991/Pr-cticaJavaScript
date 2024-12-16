/* Realizá un programa que permita la validación del ingreso a un sitio web. Teniendo ya 
precargados  un  nombre  de  usuario  ("admin")  y  una  contraseña  ("123456"),  el  programa  debe 
permitir al usuario ingresar sus credenciales. Si las mismas son erróneas, se volverán a pedir hasta 
un  máximo  de  3  intentos.  Finalmente,  la  computadora  debe  mostrar  alguno  de  los  siguientes 
mensajes  según  sea  el  caso:  "Acceso  concedido"  o  "Se  ha  bloqueado  la  cuenta". */

const admin = "admin";
const passAdmin = "123456";

let usuario = prompt("Ingrese el usuario: ");
let password = prompt("Ingrese la password: ");
let i = 2;

if (usuario == admin && password == passAdmin) {
    console.log("Acceso concedido");
} else if ((usuario != admin || password != passAdmin)) {
    while (i > 0) {

        usuario = prompt("Error. Quedan " + i + " intentos. Reingrese el usuario: ");
        password = prompt("Error. Quedan " + i + " intentos. Reingrese la password: ");

        if (usuario == admin && password == passAdmin) {
            console.log("Acceso concedido");
            i = 0;
        }

        i--;
    }

    if (i == 0) {
        console.log("Acceso denegado");
    }
}



