function calcularPrecio(cantidad,precio,estado,categoria,peso) {

  let impuesto=obtenerImpuesto(estado)
  let descuento=obtenerDescuento(cantidad)
  let imdecategoria=obtenerImDeCateg(categoria)
  let costenvio=obtenerCosteEnvio(peso)
  const subtotal = cantidad * precio;
  const total = subtotal + subtotal * impuesto - (descuento*subtotal) + subtotal * imdecategoria.impuesto - (subtotal * imdecategoria.descuento) + cantidad * costenvio;

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
  return costo;
}

  export { calcularPrecio, obtenerImpuesto, obtenerDescuento, obtenerImDeCateg, obtenerCosteEnvio };