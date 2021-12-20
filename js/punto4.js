const numero1 = prompt("Escriba el primer numero", "");
const numero2 = prompt("Escriba el segundo numero", "");

let total = parseInt(numero1);
total = parseInt(numero2);

total = Number(numero1) + Number(numero2);

total = total.toFixed(2);

alert(`La suma de estos numeros es ${total}`);
