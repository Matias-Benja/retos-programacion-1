let factura_parcial = parseInt(prompt("Cuanto debes pagar?"));
let Cuenta = parseInt(prompt("Entre cuantas personas dividiras la cuenta?"));
let porcentajePropina = parseInt(
  prompt("Indica el porcentaje de propina que quieres pagar: ")
);
let porcentajeImpuestos = parseInt(
  prompt("Cual es el porcentaje de impuestos?")
);

let valorPagarImpuestos = (factura_parcial * porcentajeImpuestos) / 100;
let valorPagarPropina = (factura_parcial * porcentajePropina) / 100;
let valorTotal = valorPagarPropina + valorPagarImpuestos + factura_parcial;
console.log("Tienes que pagar en total: " + valorTotal);
console.log(
  "Son : " + Cuenta + " personas, les toca pagar " + valorTotal / Cuenta
);
