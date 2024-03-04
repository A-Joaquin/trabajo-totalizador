import calcularPrecio from "./calcularPrecio";

describe("Calcular precio neto", () => {
  it("Calcular precio neto sin impuestos", () => {
    expect(calcularPrecio(3, 2)).toEqual(6);
  });

  it("Calcular precio neto con impuesto en California (CA)", () => {
    // Supongamos que el impuesto para California es del 8.25%
    expect(calcularPrecio(5, 10, "CA")).toEqual(54.125);
  });

  it("Calcular precio neto con impuesto en Utah (UT)", () => {
    // Supongamos que el impuesto para Utah es del 6.65%
    expect(calcularPrecio(20, 8, "UT")).toEqual(170.64);
  });

  // Puedes agregar más pruebas para otros estados o escenarios
});
