function calcularPrecio(cantidad,precio,estado,categoria,peso,tipoCliente) {

  let impuesto=obtenerImpuesto(estado)
  let descuento=obtenerDescuento(cantidad)
  let imdecategoria=obtenerImDeCateg(categoria)
  let costenvio=obtenerCosteEnvio(peso)
  let descuentoCliente=descuentoTipoCli(tipoCliente)
  const subtotal = cantidad * precio;
  let DescuentoCliente2=beneficioCli_porPrecioNeto_Cat_tipoCli(tipoCliente,subtotal,categoria);
  const total = subtotal + subtotal * impuesto - (descuento*subtotal) + subtotal * imdecategoria.impuesto - (subtotal * imdecategoria.descuento) + (cantidad * costenvio) - (descuentoCliente*subtotal)-DescuentoCliente2;

  return total;
}

function obtenerImpuesto(estado) {
  let impuesto = 0;

  // Lógica para obtener el impuesto según el estado
  if (estado === "CA") {
    impuesto = 0.0825;
  } else if (estado === "UT") {
    impuesto = 0.0665;
  } else if (estado === "NV") {
    impuesto = 0.08;
  } else if (estado === "TX") {
    impuesto = 0.0625;
  } else if (estado === "AL") {
    impuesto = 0.04;
  }
  return impuesto;
}

function obtenerDescuento(cantidad)
{
  let descuento=0;
  if (cantidad === 1000) {
    descuento = 0.03;
  }
  if (cantidad === 3000) {
    descuento = 0.05;
  } 
  else if (cantidad === 7000) {
    descuento = 0.07;
  } else if (cantidad === 10000) {
    descuento = 0.1;
  }
  else if (cantidad === 30000) {
    descuento = 0.15;
  }
  return descuento;
}

function obtenerImDeCateg(categoria){
  let descuento = 0;
  let impuesto = 0;
  if(categoria === "alim"){
    descuento = 0.02;
  }
  if(categoria === "bebal"){
    impuesto = 0.07;
  }
  if(categoria === "matesc"){
    descuento = 0.015;
  }
  if(categoria === "mueb"){
    impuesto = 0.03;
  }
  if(categoria === "elec"){
    impuesto = 0.04;
    descuento = 0.01;
  }
  if(categoria === "vest"){
    impuesto = 0.02;
  }

  return {
    impuesto: impuesto,
    descuento: descuento
  }
}

function obtenerCosteEnvio(Peso){
  let costo = 0;
  if(Peso >= 11 && Peso <=20){
    costo = 3.5
  }
  if(Peso >= 21 && Peso <=40){
    costo = 5
  }
  if(Peso >= 41 && Peso <=80){
    costo = 6
  }
  if(Peso >= 81 && Peso <=100){
    costo = 6.5
  }
  if(Peso >= 101 && Peso <=200){
    costo = 8
  }
  if(Peso >200){
    costo = 9
  }
  return costo;
}


function descuentoTipoCli(tipoCliente){
  let descuento = 0;
  if(tipoCliente === "rec"){
    descuento = 0.005
  }
  if(tipoCliente === "antig"){
    descuento = 0.01
  }
  if(tipoCliente === "esp"){
    descuento = 0.015
  }
  return descuento;
}


function beneficioCli_porPrecioNeto_Cat_tipoCli(tipoCliente,precioNetoOrd,cateProduc){
  let beneficio = 0;
  if(tipoCliente === "rec" && precioNetoOrd>3000 && cateProduc=="alim"){
    beneficio = 100;
  }
  if(tipoCliente === "esp" && precioNetoOrd>7000 && cateProduc=="elec"){
    beneficio = 200;
  }
  return beneficio;
}

  export { calcularPrecio, obtenerImpuesto, obtenerDescuento, obtenerImDeCateg, obtenerCosteEnvio, descuentoTipoCli,beneficioCli_porPrecioNeto_Cat_tipoCli };