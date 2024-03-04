function calcularPrecio(cantidad,precio,estado) {
  
  let impuesto=obtenerImpuesto(estado)
  const subtotal = cantidad * precio;
  const total = subtotal + subtotal * impuesto;

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

  export { calcularPrecio, obtenerImpuesto };