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
  it("Calcular precio total con 100 unidades con descuento de alimentos adicional", () => {
    expect(calcularPrecio(100,1,"","alim")).toEqual(98);
  });
  it("Calcular precio total con impuesto de 300 unidades en bebidas alcoholicas", () => {
    expect(calcularPrecio(300,5,"","bebal")).toEqual(1605);
  });
  it("Calcular precio total con descuento de 200 unidades en material de escritorio", () => {
    expect(calcularPrecio(200,2,"","matesc")).toEqual(394);
  });
  it("Calcular precio total con impuesto de 500 unidades en muebles", () => {
    expect(calcularPrecio(500,8,"","mueb")).toEqual(4120);
  });
  it("Calcular precio total con descuento e impuesto de 300 unidades en electronicos", () => {
    expect(calcularPrecio(300,3,"","elec")).toEqual(927);
  });
  it("Calcular precio total con impuesto de 1000 unidades en vestimenta", () => {
    expect(calcularPrecio(1000,17,"","vest")).toEqual(16830);
  });

  it("Calcular precio total de acuerdo al peso volumetrico 11 - 20", () => {
    expect(calcularPrecio(30,4,"","",11)).toEqual(225);
  });
  it("Calcular precio total de acuerdo al peso volumetrico 21 - 40", () => {
    expect(calcularPrecio(1000,2,"","",21)).toEqual(6940);
  });
  it("Calcular precio total de acuerdo al peso volumetrico 41 - 80", () => {
    expect(calcularPrecio(500,7,"","",42)).toEqual(6500);
  });
  it("Calcular precio total de acuerdo al peso volumetrico 81 - 100", () => {
    expect(calcularPrecio(5000,6,"","",81)).toEqual(62500);
  });
  it("Calcular precio total de acuerdo al peso volumetrico 101 - 200", () => {
    expect(calcularPrecio(4768,13,"","",105)).toEqual(100128);
  });
  it("Calcular precio total de acuerdo al peso volumetrico > 200", () => {
    expect(calcularPrecio(1000,1,"","",230)).toEqual(9970);
  });


  it("Calcular precio total de acuerdo al descuendo de tipo de cliente: NORMAL", () => {
    expect(calcularPrecio(100,1,"","",1,"nor")).toEqual(100);
  });
  it("Calcular precio total de acuerdo al descuendo de tipo de cliente: Recurrente", () => {
    expect(calcularPrecio(350,3,"","",1,"rec")).toEqual(1044.75);
  });
  it("Calcular precio total de acuerdo al descuendo de tipo de cliente: Antiguo Recurrente", () => {
    expect(calcularPrecio(400,2,"","",1,"antig")).toEqual(792);
  });
  it("Calcular precio total de acuerdo al descuendo de tipo de cliente: Especial", () => {
    expect(calcularPrecio(777,7,"","",1,"esp")).toEqual(5357.415);
  });

});
