import calcularPrecio from "./calcularPrecio";

describe("Calcular precio neto", () => {
  it("Calcular precio neto sin impuestos", () => {
    expect(calcularPrecio(3, 2)).toEqual(6);
  });

  it("Calcular precio neto con impuesto en California (CA)", () => {
    expect(calcularPrecio(5, 10, "CA")).toEqual(54.125);
  });

  it("Calcular precio neto con impuesto en Utah (UT)", () => {
    expect(calcularPrecio(20, 8, "UT")).toEqual(170.64);
  });

  it("Calcular precio neto con impuesto en Nevada (NV)", () => {
    expect(calcularPrecio(15, 21, "NV")).toEqual(340.2);
  });

  it("Calcular precio neto con impuesto en Texas (TX)", () => {
    expect(calcularPrecio(35, 7, "TX")).toEqual(260.3125);
  });
});
