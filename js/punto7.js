const nombre = prompt("Ingrese su nombre", "");
const edad = prompt("Ingrese su edad", "");
let nombre1 = nombre;

let edad1 = Number(edad) - 1;

let edad2 = Number(edad) + 1;

alert(
  `${nombre1} el año pasado tenias ${edad1} años y el proximo año cumpliras ${edad2}`
);
