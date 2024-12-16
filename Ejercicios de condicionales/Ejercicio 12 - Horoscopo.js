/* Realizá un programa que permita al usuario ingresar el día y el mes de su cumpleaños (de manera 
independiente). La computadora debe indicar cuál es su signo del zodiaco. Deben validarse tanto el 
día como el mes. */

let dia;
let mes;

dia = parseInt(prompt("Dia de nacimiento: "));
mes = parseInt(prompt("Mes de nacimiento: "));

if(dia > 30){
    console.log("Dia no válido.");
}else if(mes > 12){
    console.log("Mes no válido.");
}else{
    switch(mes){
        case 1:
            if(dia >= 20){
                console.log("Tu signo es Acuario.");
            }else{
                console.log("Tu signo es Capricornio.");
            }
            break;
        case 2:
            if(dia >= 19){
                console.log("Tu signo es Piscis.");
            }else{
                console.log("Tu signo es Acuario.");
            }
            break;
        case 3:
            if(dia >= 21){
                console.log("Tu signo es Aries.");
            }else{
                console.log("Tu signo es Piscis.");
            }
            break;
        case 4:
            if(dia >= 20){
                console.log("Tu signo es Tauro.")
            }else{
                console.log("Tu signo es Aries.");
            }
            break;
        case 5:
            if(dia >= 21){
                console.log("Tu signo es Géminis.");
            }else{
                console.log("Tu signo es Tauro.");
            }
            break;
        case 6:
            if(dia >= 21){
                console.log("Tu signo es Cáncer.");
            }else{
                console.log("Tu signo es Géminis.");
            }
            break;
        case 7:
            if(dia >= 23){
                console.log("Tu signo es Leo.");
            }else{
                console.log("Tu signo es Cáncer.");
            }
            break;
        case 8:
            if(dia >= 23){
                console.log("Tu signo es Virgo.");
            }else{
                console.log("Tu signo es Leo.");
            }
            break;
        case 9:
            if(dia >= 23){
                console.log("Tu signo es Libra.");
            }else{
                console.log("Tu signo es Virgo.");
            }
            break;
        case 10:
            if(dia >= 23){
                console.log("Tu signo es Escorpio.");
            }else{
                console.log("Tu signo es Libra.");
            }
            break;
        case 11:
            if(dia >= 22){
                console.log("Tu signo es Sagitario.");
            }else{
                console.log("Tu signo es Escorpio.");
            }
            break;
        case 12:
            if(dia >= 22){
                console.log("Tu signo es Capricornio.");
            }else{
                console.log("Tu signo es Sagitario");
            }
            break;
    }
}