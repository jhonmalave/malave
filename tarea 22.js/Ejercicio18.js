//Pedir al usuario un número y mostrar si es múltiplo de 3 y par. 
//entrada:numero=0(leer)
//proceso:si numero / 3=0 && %2=0 entonces(escribir el numero es multiplo de 3 y par)
//sino (escribir el numero no es  multiplo de 3 y no es par)
//salida: numero

const read = require('prompt-sync')();
const write = console.log;

function verificarMultiplo3yPar() {
    let numero = parseInt(read("Ingrese un número: "));

    if (numero % 3 === 0 && numero % 2 === 0) {
        write( "numero es múltiplo de 3 y par.");
    } else {
        write( "numero no es múltiplo de 3 y no es par.");
    }
}

verificarMultiplo3yPar();
