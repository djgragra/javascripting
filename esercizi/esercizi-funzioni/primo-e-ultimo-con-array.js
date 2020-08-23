function maggiore(array) {
  return Math.max(...array); //(...array) prende i singoli valori dell'array e non l'intero array
}

function minore(array) {
  return Math.min(...array);
}
var a = 2;
var b = 3;
var c = 1;

console.log(maggiore([a, b, c]));
console.log(minore([a, b, c]));
