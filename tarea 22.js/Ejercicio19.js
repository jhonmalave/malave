//  19. Solicitar al usuario un número y mostrar si es divisible por 2 o impar. 
// entrada: numero=0,(leer)
//proceso: si numero/2=0 entonces escribir el numero es divisible por 2
// sino el numero es impar
// salida:resultado


const read = require("prompt-sync")();
const write = console.log;

function verificarNumero(num) {
    if (num % 2 === 0) {
        write( "El número es divisible por 2.");
    } else {
        write( "El número es impar.");
    }
}

const num = parseInt(read("Ingrese un número: "));
const resultado = verificarNumero(num);

write(resultado);
