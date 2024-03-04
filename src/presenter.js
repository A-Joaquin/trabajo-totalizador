import { calcularPrecio, obtenerImpuesto, obtenerDescuento } from "./calcularPrecio";

const first = document.querySelector("#cantidad-items");
const second = document.querySelector("#precio-items");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");
const estadoInput = document.querySelector("#estados");
const span = document.querySelector("#porcentaje-impuesto");
const div2 = document.querySelector("#resultado-precioNeto");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseFloat(second.value);
  const estado = estadoInput.value;
  /*mostrar precio neto */
  div2.innerHTML="<p> precio neto: $" + firstNumber*secondNumber + "</p>"
  /*mostrar impuesto de ESTADO */
  span.innerHTML = estado + " " + obtenerImpuesto(estado)*100 + "%: " + "$"+obtenerImpuesto(estado)*(firstNumber*secondNumber);
  /*mostrar precio TOTAL */
  div.innerHTML = "<p> precio total: $" + calcularPrecio(firstNumber, secondNumber, estado) + "</p>";
});