let cantidadDias = parseInt(prompt("Ingrese una cantidad de dias"));

let cantidadHoras = cantidadDias * 24;
let cantidadMinutos = cantidadHoras * 60;
let cantidadSegundos = cantidadMinutos * 60;

alert(
  `En ${cantidadDias} días, hay: ${cantidadHoras} horas, ${CantidadMinutos} minutos y ${cantidadSegundos} segundos`
);
