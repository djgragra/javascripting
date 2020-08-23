var numero = 5;

function fattoriale(elemento) {
  var counter = numero;
  console.log(counter);
  for (var i = counter; i > 1; i--) {
    numero = numero * (i - 1);
  }
  return numero;
}

console.log(fattoriale(numero));
