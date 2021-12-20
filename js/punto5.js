const numero1 = prompt("Escriba el primer numero", "");
const numero2 = prompt("Escriba el segundo numero", "");
const numero3 = prompt("Escriba el segundo numero", "");

let suma = parseInt(numero1);
suma = parseInt(numero2);

let mult = parseInt(numero3);

suma = Number(numero1) + Number(numero2);

mult = suma * Number(numero3);
mult = mult.toFixed(2);

alert(`El resultado es ${mult}`);
