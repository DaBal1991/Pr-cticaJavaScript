/* Realizá un programa que permita al usuario ingresar la edad y el sueldo de cierto empleado. La 
computadora muestra el monto del aporte al sindicato que se debe descontar del salario del 
empleado, según el siguiente cuadro: 

Escala salarial         Porcentaje a descontar
Menos de $20000         0.7%
Entre $20000 y $29999   1.4%
Entre $30000 y $39999   2.1%
$40000 o más            2.8%

Además, si la persona tiene 30 años o menos, se cobra un 30% adicional del valor del aporte. */

const descuentoEdad = 0.3;
let edad;
let sueldo;
let descuento;
let descuentoExtra;
let descuentoTotal;

edad = parseInt(prompt("Ingrese la edad: "));
sueldo = parseFloat(prompt("Ingrese el sueldo: "));

if(sueldo > 40000){
    descuento = sueldo*0.028;

    if(edad < 30){
        descuentoExtra = descuento*descuentoEdad;

        descuentoTotal = descuento + descuentoExtra;

        console.log("Porcentaje a descontar del sueldo: $" + descuentoTotal);
    }else{
        console.log("Porcentaje a descontar del sueldo: $" + descuento);
    }

    
}else if(sueldo > 30000 && sueldo < 39999){
    descuento = sueldo*0.021;

    if(edad < 30){
        descuentoExtra = descuento*descuentoEdad;

        descuentoTotal = descuento + descuentoExtra;

        console.log("Porcentaje a descontar del sueldo: $" + descuentoTotal);
    }else{
        console.log("Porcentaje a descontar del sueldo: $" + descuento);
    }

}else if(sueldo > 20000 && sueldo < 29999){
    descuento = sueldo*0.014;

    if(edad < 30){
        descuentoExtra = descuento*descuentoEdad;

        descuentoTotal = descuento + descuentoExtra;

        console.log("Porcentaje a descontar del sueldo: $" + descuentoTotal);
    }else{
        console.log("Porcentaje a descontar del sueldo: $" + descuento);
    }

}else{
    descuento = sueldo*0.007;

    if(edad < 30){
        descuentoExtra = descuento*descuentoEdad;

        descuentoTotal = descuento + descuentoExtra;

        console.log("Porcentaje a descontar del sueldo: $" + descuentoTotal);
    }else{
        console.log("Porcentaje a descontar del sueldo: $" + descuento);
    }
}
