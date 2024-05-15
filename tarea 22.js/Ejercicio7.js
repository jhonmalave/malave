//Escribir un algoritmo que lea cuatro numeros y determine si el numero 1 es divisor del numero3 y si el numero 2 es el doble del numero4.
//del numero3 Y si el numero 2 es el doble del numero4

// entrada:numero=0(leer)nummero2=0(leer)numero3=0(leer),numero4=0(leer)
// proceso: si numero3/numero1=0(entonces"escribir el numero1 es divisor del numero3)
// salida:numeros

const read = require("prompt-sync")();
const write = console.log;


function esDivisor(dividendo, divisor) {
    return dividendo % divisor === 0;
}


function esDoble(num1, num2) {
    return num1 === 2 * num2;
}


function verificarNumeros() {
    const numero1 = parseInt(read("Ingrese el primer numero: "));
    const numero2 = parseInt(read("Ingrese el segundo numero: "));
    const numero3 = parseInt(read("Ingrese el tercer numero: "));
    const numero4 = parseInt(read("Ingrese el cuarto numero: "));

    if (esDivisor(numero3, numero1) && esDoble(numero2, numero4)) {
        write("El numero 1 es divisor del numero 3 y el numero 2 es el doble del numero 4.");
    } else {
        write("El numero 1 no es divisor del numero 3 y el numero 2 no es el doble del numero 4.");
    }
}


verificarNumeros();
