// Pedir al usuario un numero y mostrar si es mayor o menor que 10.
// entrada :numero=0(leer)
//proceso: numero <10( es menor) ,numero >10( es mayor)
// salida: es mayor o menor
const read = require("prompt-sync")();
const write = console.log;

function versiesmayoromenor() {

const numero = parseFloat(read("Ingrese un número: "));


if (numero > 10) {
    write("Es mayor que 10.");
} else  {
    write("Es menor que 10.");
} 

}
versiesmayoromenor();