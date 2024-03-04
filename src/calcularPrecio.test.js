import calcularPrecio from "./calcularPrecio";

describe("Calcular precio neto", () => {
  it("Calcular precio neto 1", () => {
    expect(calcularPrecio(3, 2)).toEqual(6);
  });
  it("Calcular precio neto 2", () => {
    expect(calcularPrecio(3, 5)).toEqual(15);
  });
});
