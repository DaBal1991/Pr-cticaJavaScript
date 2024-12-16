/* Realizá  un  programa  que  permita  al  usuario  ingresar  un  número  entero  n  entre  1  y  10.  La 
computadora debe mostrar la tabla de multiplicar de n. */

let n = parseInt(prompt("Ingrese un numero entre el 1 y el 10"));

if(n <= 10 && n >= 1){
    console.log("Tabla del " + n);

    for(let i = 1; i <= 10; i++){
        console.log(n + " x "+ i + " = " + n*i);
    }
}else{
    console.log("El numero ingresado no esta entre el 1 y el 10");
}
