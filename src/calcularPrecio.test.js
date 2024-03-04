import calcularPrecio from "./calcularPrecio";

describe("Calcular precio neto", () => {
  it("Calcular precio neto sin impuestos", () => {
    expect(calcularPrecio(3, 2)).toEqual(6);
  });

  it("Calcular precio neto con impuesto en California (CA)", () => {
    // Supongamos que el impuesto para California es del 8.25%
    expect(calcularPrecio(3, 5, "CA")).toEqual(16.3125); // 3 * 5 + (3 * 5 * 0.0825)
  });

  // Puedes agregar más pruebas para otros estados o escenarios
});
