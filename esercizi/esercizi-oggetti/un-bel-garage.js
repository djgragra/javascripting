var modelli = [];
var filtrato;

var garage = [
    {marca: 'Audi', modello: 'A4' },
    {marca: 'Audi', modello: 'A2' },
    {marca: 'Fiat', modello: 'Bravo'},
    {marca: 'Audi', modello: 'A3' },
    {marca: 'Alfa Romeo', modello: 147},
    {marca: 'Volkswagen', modello: 'Golf'},
    {marca: 'Fiat', modello: '500'},
    {marca: 'Fiat', modello: '500 L'},
    {marca: 'Fiat', modello: '500 X'},
    {marca: 'Alfa Romeo', modello: 'Giulietta'},
    {marca: 'Alfa Romeo', modello: 'Giulia'},
    {marca: 'Volkswagen', modello: 'Passat'}
];

auto('Alfa Romeo');

function auto(make) {
  for (var i=0; i < garage.length; i++) {
    if (garage[i].marca == make) {
      modelli[i] = garage[i].modello; // i modelli che passano vanno nel array "modelli", quelli che non passano vanno in "modelli" come undefined
      filtrato = modelli.filter(function(val){ return val!==undefined; }); // prende l'array modelli e lo filtra eliminando gli undefined e creando l'array "filtrato"
    } 
}
  console.log(`Ecco i modelli di ${make} che ho in garage: ${filtrato.join(', ')}`);
}
