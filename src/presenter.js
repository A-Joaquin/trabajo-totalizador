import { calcularPrecio, obtenerImpuesto, obtenerDescuento, obtenerImDeCateg, obtenerCosteEnvio } from "./calcularPrecio.js";

const first = document.querySelector("#cantidad-items");
const second = document.querySelector("#precio-items");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");
const estadoInput = document.querySelector("#estados");
const categInput = document.querySelector("#categorias")
const span = document.querySelector("#porcentaje-impuesto");
const div2 = document.querySelector("#resultado-precioNeto");
const divDescuento=document.querySelector("#descuento-cantidad");
const divImpuestoCat=document.querySelector("#impuesto-categoria");
const divDescuentoCat=document.querySelector("#descuento-categoria");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseFloat(second.value);
  const estado = estadoInput.value;
  const categoria = categInput.value;
  
  let precioNeto=firstNumber*secondNumber;
  /*mostrar precio neto */
  div2.innerHTML="<p> Precio neto: $" + precioNeto + "</p>";
  /*descuento por cantidad */
  let descuento=obtenerDescuento(firstNumber);
  divDescuento.innerHTML="<p> Descuento:" + descuento + "%: " +descuento*(precioNeto)+"</p>";
  /*impuesto por categoria */
  let impuesto_descuentoCAT=obtenerImDeCateg(categoria)
  let impuesto_cat=Number.parseFloat(impuesto_descuentoCAT.impuesto);  
  let descuento_cat=Number.parseFloat(impuesto_descuentoCAT.descuento); 
  divImpuestoCat.innerHTML="<p> Impuesto por categoria: " + (impuesto_cat*100).toFixed(0) + "%: $" +((precioNeto)*impuesto_cat).toFixed(2)+"</p> ";
  /*descuento por categoria */
  divDescuentoCat.innerHTML="<p> Descuento por categoria:" + (descuento_cat*100).toFixed(0) + "%: $" + (precioNeto*descuento_cat).toFixed(2)+"</p>";
  /*mostrar impuesto de ESTADO */
  let impuesto=obtenerImpuesto(estado);
  span.innerHTML = "Impuesto para: " +estado + " " + impuesto*100 + "%: " + "$"+impuesto*(precioNeto);
  /*mostrar precio TOTAL */
  div.innerHTML = "<p> precio total: $" + calcularPrecio(firstNumber, secondNumber, estado, categoria) + "</p>";
});