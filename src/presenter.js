import { calcularPrecio, obtenerImpuesto, obtenerDescuento, obtenerImDeCateg, obtenerCosteEnvio, descuentoTipoCli, beneficioCli_porPrecioNeto_Cat_tipoCli } from "./calcularPrecio.js";

const first = document.querySelector("#cantidad-items");
const second = document.querySelector("#precio-items");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");
const estadoInput = document.querySelector("#estados");
const categInput = document.querySelector("#categorias");
const tclienteInput = document.querySelector("#tclientes");
const span = document.querySelector("#porcentaje-impuesto");
const div2 = document.querySelector("#resultado-precioNeto");
const divDescuento=document.querySelector("#descuento-cantidad");
const divImpuestoCat=document.querySelector("#impuesto-categoria");
const divDescuentoCat=document.querySelector("#descuento-categoria");

const peso = document.querySelector("#peso-items");
const divCostoEnvio=document.querySelector("#costo-envio");

const divDescuentoCli=document.querySelector("#descuento-cliente");
const divDescuentoCli2=document.querySelector("#descuento-cliente2");

form.addEventListener("submit", (event) => {
  event.preventDefault();


    // Validar que los campos no estén vacíos y no sean negativos
    if (!first.value || !second.value || !peso.value) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    const firstNumber = Number.parseInt(first.value);
    const secondNumber = Number.parseFloat(second.value);
    const pesoItems = parseFloat(peso.value);
  
    // Validar que los valores no sean negativos
    if (firstNumber < 0 || secondNumber < 0 || pesoItems < 0) {
      alert("Por favor, ingresa valores no negativos.");
      return;
    }
  

  const estado = estadoInput.value;
  const categoria = categInput.value;
  const tipocliente = tclienteInput.value;
  
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
  /*Costo de envio */
  let costoEnvio=obtenerCosteEnvio(pesoItems)
  divCostoEnvio.innerHTML="<p> El costo de envio es: $"+ (costoEnvio*firstNumber).toFixed(2) +"";
  /*Descuento de cliente */
  let descuentoCliente=descuentoTipoCli(tipocliente);
  divDescuentoCli.innerHTML="<p> Descuento por tipo de cliente "+ (descuentoCliente*100).toFixed(0)+"%: $"+ (descuentoCliente*precioNeto).toFixed(2) +"";
  /*Descuento de cliente BENEFICIO */
  let descuentoCliente2=beneficioCli_porPrecioNeto_Cat_tipoCli(tipocliente,precioNeto,categoria);
  divDescuentoCli2.innerHTML="<p> Descuento por tipo cliente, precio Neto y categoria: $"+ descuentoCliente2 +"";
  /*descuento por categoria */
  divDescuentoCat.innerHTML="<p> Descuento por categoria: <p>" + (descuento_cat*100).toFixed(0) + "%: $" + (precioNeto*descuento_cat).toFixed(2)+"</p>";
  /*mostrar impuesto de ESTADO */
  let impuesto=obtenerImpuesto(estado);
  span.innerHTML = "Impuesto para: " +estado + " " + (impuesto*100).toFixed(0) + "%: " + "$"+(impuesto*(precioNeto)).toFixed(2);
  /*mostrar precio TOTAL */
  div.innerHTML = "<p> precio total: $" + (calcularPrecio(firstNumber, secondNumber, estado, categoria,pesoItems,tipocliente)).toFixed(2) + "</p>";
});