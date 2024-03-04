import { calcularPrecio, obtenerImpuesto, obtenerDescuento } from "./calcularPrecio";

const first = document.querySelector("#cantidad-items");
const second = document.querySelector("#precio-items");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");
const estadoInput = document.querySelector("#estados");
const span = document.querySelector("#porcentaje-impuesto");
const div2 = document.querySelector("#resultado-precioNeto");
const divDescuento=document.querySelector("#descuento-cantidad");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseFloat(second.value);
  const estado = estadoInput.value;
  
  let precioNeto=firstNumber*secondNumber;
  /*mostrar precio neto */
  div2.innerHTML="<p> Precio neto: $" + precioNeto + "</p>";
  /*descuento por cantidad */
  let descuento=obtenerDescuento(firstNumber);
  divDescuento.innerHTML="<p> Descuento:" + descuento + "%: " +descuento*(precioNeto)+"</p>";
  /*mostrar impuesto de ESTADO */
  let impuesto=obtenerImpuesto(estado);
  span.innerHTML = "Descuento para: " +estado + " " + impuesto*100 + "%: " + "$"+impuesto*(precioNeto);
  /*mostrar precio TOTAL */
  div.innerHTML = "<p> precio total: $" + calcularPrecio(firstNumber, secondNumber, estado) + "</p>";
});