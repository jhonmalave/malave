//Pedir al usuario un numero y mostrar si es par o impar. 
// entrada: numero=0,(leer)
// proceso: numero1%2=0 (escribir es par)sino( escribir es impar)
// salida numero

const read = require("prompt-sync")();
const write = console.log;

function verparoimpar() {

const numero = parseInt(read("Ingrese un número: "));


if (numero % 2 === 0) {
    write("El numero es par.");
} else {
    write("El numero es impar.");
}

}

verparoimpar();