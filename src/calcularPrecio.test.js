import calcularPrecio from "./calcularPrecio";

describe("Sumar", () => {
  it("deberia de calcular precio neto cantidad*precio", () => {
    expect(calcularPrecio(3, 2)).toEqual(6);
  });
});
