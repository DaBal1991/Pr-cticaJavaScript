/* mostrarNPrimos, que muestre por la 
consola, separados por comas, los primeros  n 
números primos. El valor de  n se recibe como 
parámetro. */

function mostrarNPrimos(x) {

    let contador = 0;
    let i = 2;
    let j;

    while (contador < x) {
        j = 2;

        while ((i % j) != 0 && j <= Math.sqrt(i)) { 
            j++;  
        }   

        if (j > Math.sqrt(i)) { 
            console.log(i); 
            contador++; 
        }

        i++;

        /*
        i= 2 j = 2
        2%2 = 0 por lo que va al siguiente paso 
        2 > 1,41...
        Imprime 2

        i = 3 j = 2
        3%2 != 0 y 2 es mayor que raiz de 2 (1,41...) por lo que j = 3
        3 > 1,41...
        Imprime 3

        i = 4 j = 2
        4%2 = 0 por lo que va al siguiente paso
        2 no es menor que 2
        No imprime

        i = 5 j = 2
        5%2 != 0 y 2 < 2,2...  por lo que j = 3
        5%2 != 0 y 3 > 2,2... por lo que va al siguiente paso
        3 > 2,2...
        Imprime 5

        i = 6 j = 2
        6%3 = 0 por lo que va al siguiente paso
        2 no es mayor que 1,41...
        No imrpime

        i = 7 j = 2
        7%2 != 0 y 2 < 2,64... por lo que j = 3
        7%2 != 0 y 3 > 2,64... 
        3 es mayor que 2,64...
        Imprime 7

        i = 8 j = 2
        8%2 = 0 va al siguiente paso
        2 no es mayor que 2,82...
        No imprime

        i = 9 j = 2
        9%2 != 0 y 2 < 3 por lo que j = 3 
        9%2 != 0 y 3 no es mayor que por lo que j = 4
        9%2 != 0 y 4 es mayor que 3 por lo que va al siguiente paso
        4 no es mayor que raiz de 9 (3)
        No imprime

        i = 10 j = 2
        10%2 = 0 va al siguiente paso
        2 no es mayor a la raiz de 10 (3,1622...)
        No imprime

        i = 11 j = 2
        11%2 != 0 y 2 es menor que raiz de 11 (3,316...) por lo que j = 3
        11%2 != 0 y 3 es menor que raiz de 11 (3,316...) por lo que j = 4
        11%2 != 0 y 4 es menor que raiz de 11 (3,316...)
        4 es mayor que raiz de 11 (3,316...)
        Imprime 11

        i = 12 j = 2
        ...

        */
    }
}

let numero = parseInt(prompt("Ingrese la cantidad de numeros primos a imprimir: "));

mostrarNPrimos(numero);
