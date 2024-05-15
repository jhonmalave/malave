//30. Pide al usuario el total de su cuenta en un restaurante y el porcentaje de descuento
//que ofrece por ser cliente frecuente. Si el total de la cuenta supera los $70, aplica el
//descuento por fidelidad, de lo contrario, no se aplica ningún descuento. Calcula y
//muestra el monto final con el descuento aplicado más el IVA del 15%.


// entrada:totalcuenta=0,(leer),descuentoclientefrecuente,
//proceso:si(totaldecuenta > $70)entonces
//descuentoPorFidelidad si no , entonces 
// no se aplica descuento 
// salida: descuento aplicado mas el 15 %







const read = require('prompt-sync')();
const write = console.log;

function descuento(){
const totalCuenta = parseFloat(read("Ingrese el total de la cuenta: "));
const descuentoClienteFrecuente = parseFloat(read("Ingrese el porcentaje de descuento por ser cliente frecuente: "));
let montoFinal;
if (totalCuenta > 70) {
    const descuento = totalCuenta * (descuentoClienteFrecuente / 100);
    const totalConDescuento = totalCuenta - descuento;
    montoFinal = totalConDescuento * 1.15; 
} else {
    montoFinal = totalCuenta * 1.15; 
}
write("El monto final a pagar es: $" + montoFinal.toFixed(2));
}
descuento()