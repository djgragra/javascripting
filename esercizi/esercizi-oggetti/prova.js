var modelli = [];
var filtrato;
​
var garage = [
    {marca: 'Audi', modello: 'A4' },
    {marca: 'Audi', modello: 'A2' },
    {marca: 'Fiat', modello: 'Bravo'},
    {marca: 'Audi', modello: 'A3' },
    {marca: 'Alfa Romeo', modello: 147},
    {marca: 'Volkswagen', modello: 'Golf'}
];
​
​
auto('Alfa Romeo');
​
​
function auto(make) {
  for (var i=0; i < garage.length; i++) {
    if (garage[i].marca == make) {
      modelli[i] = garage[i].modello;
      filtrato = modelli.filter(function(val){ return val!==undefined; });
    }
}
  console.log(`Ecco i modelli di ${make} che ho in garage: ${filtrato.join(', ')}`);
}
