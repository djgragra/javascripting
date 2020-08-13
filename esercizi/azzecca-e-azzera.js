var numeri = [];
//var x = [];

while (numeri.length < 10) {
  random = Math.ceil(Math.random() * 10);
  numeri.push(random);

}
console.log('numeri estratti' + '\n' + numeri);


while (numeri.length > 0) {
  var numero = prompt("scegli un numero da eliminare");
  console.log('Hai scelto ' + numero);
  var num = parseInt(numero, 10)
    if (numeri.includes(num))
      //x.push(num);
    while ((i = numeri.indexOf(num)) != -1){
      numeri.splice(i, 1);

}

console.log('Sono rimasti ancora ' + numeri.length + ' numeri' + '\n' + numeri + '\n');
}

console.log('Complimenti hai trovato tutti i numeri');
//console.log('nuova array' + '\n' + numeri);
