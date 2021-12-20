const pizza1 = prompt(
  `¿Cuantas rebanadas de pizza trajiste?
` + `Traje:`
);
const pizza2 = prompt(
  `¿Cuantas rebanadas de pizza comieron?
` + `Comimos:`
);

let total = Number(pizza1) - Number(pizza2);

alert(`Quedan ${total} rebanadas de pizza`);
