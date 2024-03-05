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
  it("Calcular precio total con descuento con 7000 unidades", () => {
    expect(calcularPrecio(7000,2)).toEqual(13020);
  });
  it("Calcular precio total con descuento con 10000 unidades", () => {
    expect(calcularPrecio(10000,2)).toEqual(18000);
  });
  it("Calcular precio total con descuento con 30000 unidades", () => {
    expect(calcularPrecio(30000,2)).toEqual(51000);
  });

  it("Calcular precio total con descuento e impuesto de 30000 unidades en varios", () => {
    expect(calcularPrecio(30000,2,"","var")).toEqual(51000);
  });
  it("Calcular precio total con 100 unidades con impuesto de alimentos adicional", () => {
    expect(calcularPrecio(100,1,"","alim")).toEqual(98);
  });
  it("Calcular precio total con descuento e impuesto de 300 unidades en bebidas alcoholicas", () => {
    expect(calcularPrecio(300,5,"","bebal")).toEqual(1605);
  });
  it("Calcular precio total con descuento e impuesto de 200 unidades en material de escritorio", () => {
    expect(calcularPrecio(200,2,"","matesc")).toEqual(394);
  });
  it("Calcular precio total con descuento e impuesto de 500 unidades en muebles", () => {
    expect(calcularPrecio(500,8,"","mueb")).toEqual(4120);
  });

});
