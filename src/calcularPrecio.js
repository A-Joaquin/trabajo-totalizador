function calcularPrecio(cantidad,precio,estado) {
  let impuesto = 0;
  if (estado === "CA") { // Impuesto del 8.25% para California
    impuesto = 0.0825;
  } else if(estado === "UT") { // Impuesto del 6.65% para Utah
    impuesto = 0.0665
  } else if(estado === "NV") { // Impuesto del 8.00% para Nevada
    impuesto = 0.08
  }
  const subtotal = cantidad * precio;
  const total = subtotal + subtotal * impuesto;

  return total;
}

  export default calcularPrecio;