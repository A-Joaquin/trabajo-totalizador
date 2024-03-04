import { calcularPrecio, obtenerImpuesto } from "./calcularPrecio";

// Resto del código aquí


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

  it("Calcular precio neto con impuesto en Alabama (AL)", () => {
    expect(calcularPrecio(11, 22, "AL")).toEqual(251.68);
  });

  it("Calcular precio neto con impuesto en Alabama (AL)", () => {
    expect(calcularPrecio(11, 22, "AL")).toEqual(251.68);
  });

  it("Calcular precio neto con impuesto en Alabama (AL)", () => {
    expect(calcularPrecio(11, 22, "AL")).toEqual(251.68);
  });

  it("Calcular precio total con descuento con 1000 unidades", () => {
    expect(calcularPrecio(1000,2)).toEqual(1940);
  });

  it("Calcular precio total con descuento con 3000 unidades", () => {
    expect(calcularPrecio(3000,2)).toEqual(5700);
  });


});
