//Escribir un algoritmo que lea cuatro números y determine si el numero 1 es la mitad del número 2; Y si el numero 3 es divisor del numero4
//entrada:numero1=0(leer),numero2=0(leer),numero3=0(leer),numero4=0,(leer)
// proceso:numero1 / 2 === num1)(entonces)"escribir el numero1 es la mitad del numero2"
//salida: escribir el numero1 es la mitad del numero2"


const read = require('prompt-sync')();
const write = console.log;


function leernumeros (){

    let valores=[]
    const valor  = (read("Ingrese el número 1:"));
    const valor2 =  (read("Ingrese el número 2:"));
    const valor3 =  (read("Ingrese el número 3:"));
    const valor4 =  (read("Ingrese el número 4:"));

    write(valor)
    write(valor2)
    write(valor3)
    write(valor4)
    


if (valor * 2 === valor2) {
    write(valor + " es la mitad de " + valor2);
} else {
    write(valor + " no es la mitad de " + valor2);
}


if (valor4 % valor3 === 0) {
    write(valor3 + "  divisor de " + valor4);
} else {
    write(valor3 + " no es divisor de " + valor4);
}


}
leernumeros ()