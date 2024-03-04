function calcularPrecio(cantidad,precio,estado) {

  let impuesto=obtenerImpuesto(estado)
  let descuento=obtenerDescuento(cantidad)
  const subtotal = cantidad * precio;
  const total = subtotal + subtotal * impuesto - (descuento*subtotal);

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
  return descuento;
}

  export { calcularPrecio, obtenerImpuesto, obtenerDescuento };