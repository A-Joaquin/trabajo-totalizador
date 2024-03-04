function calcularPrecio(cantidad,precio,estado) {
  let impuesto = 0;
  if (estado === "CA") {
    // Impuesto del 8.25% para California
    impuesto = 0.0825;
  }
  const subtotal = cantidad * precio;
  const total = subtotal + subtotal * impuesto;

  return total;
}

  export default calcularPrecio;