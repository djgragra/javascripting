var numero = 5000
numero = numero.toString()
if (numero.length == 1) {

  console.log('Il numero ' + numero + ' è formato da ' + numero.length + ' cifra');

}
else if (numero.length < 5) {
  console.log('Il numero ' + numero + ' è formato da ' + numero.length + ' cifre');
}
else {
  console.log('ERRORE!! Inserisci un numero inferiore a 10000');
}
