var a = '1. Tiramisù';
var b = '2. Torta della nonna';
var c = '3. Cheesecake alla nutella';
var d = '4. Macedonia';
console.log(a);
console.log(b);
console.log(c);
console.log(d);

var choice = a;


if (choice == a){
  console.log('Hai scelto ' + a);
  document.write(`Hai scelto il dolce ${choice}`);
} else if (choice == b) {
  console.log('Hai scelto ' + b);
  document.write(`Hai scelto il dolce ${choice}`);
} else if (choice == c) {
  console.log('Hai scelto ' + c);
  document.write(`Hai scelto il dolce ${choice}`);
} else if (choice == d) {
  console.log('Hai scelto ' + d);
  document.write(`Hai scelto il dolce ${choice}`);
} else {
  console.log('Dolce non disponibile');
}
