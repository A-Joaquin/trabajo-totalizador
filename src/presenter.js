import sumar from "./sumador";

const first = document.querySelector("#cantidad-items");
const second = document.querySelector("#precio-items");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseFloat(second.value);

  div.innerHTML = "<p>" + calcularPrecio(firstNumber, secondNumber) + "</p>";
});
