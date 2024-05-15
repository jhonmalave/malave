//23. Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado.
//Calcular y mostrar el precio final luego de aplicar el descuento siempre cuando el
//precio sea mayor $100.
//entrada:precioproct=0(leer),descuento=
//proceso:si precioproct > 100 encontes (aplica descuento)
//sino precioproct <100 entonces no aplica descuento
// salida precio


const read = require('prompt-sync')();
const write = console.log
function producto(){
let precioproct=0,descuento=0,montodescuento,preciofinal
precioproct=parseFloat(read("ingresa el precio del producto   "))

descuento=parseFloat(read("ingresa el descuento  "))

if (precioproct > 100){
  montodescuento=(precioproct*descuento/100)

preciofinal=precioproct-montodescuento

write("  precio final ", preciofinal , " mas el descuento")
}else{
    write("El precio del producto debe ser mayor a $100 para aplicar un descuento.");
}

}
producto()


