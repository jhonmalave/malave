// Solicitar al usuario un caracter y mostrar si es una vocal o consonante.
//entrada:caracter=a-z(leer)caracterminuscula
// proceso:si caracterminuscula:"a","e","i","o","u"(escribir "el caracter integrado en una sola bocal")
//salida:caracter
const prompt = require("prompt-sync")();
const write = console.log;

function caracterovocal() {
const caracter = prompt("Ingrese un carácter: ");

const caracterMinuscula = caracter.toLowerCase();

if (
    caracterMinuscula === "a" ||
    caracterMinuscula === "e" ||
    caracterMinuscula === "i" ||
    caracterMinuscula === "o" ||
    caracterMinuscula === "u"
) {
    write("El carácter ingresado es una vocal.");
} else if (caracter.match(/[a-z]/i)) {
    write("El carácter ingresado es una consonante.");
} else {
    write("El carácter ingresado no es una letra.");
}

}
caracterovocal();