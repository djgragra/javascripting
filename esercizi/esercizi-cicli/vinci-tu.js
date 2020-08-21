var att = 4;
var tent = 0;
var total1 = 0;
var total2 = 0;

//Giocatore 1
console.log('Il Giocatore 1 ha lanciato')
for (var i = 0; i < att; i++) {
  tent++
  var dado = (Math.random() * (7-1) + 1);
  dado = Math.floor(dado);
  if (tent <= att);
    total1 = (total1+dado);

  console.log(dado);

}

//Giocatore 2
console.log('Il Giocatore 2 ha lanciato')
for (var i = 0; i < att; i++) {
  tent++
  var dado = (Math.random() * (7-1) + 1);
  dado = Math.floor(dado);
  if (tent <= att);
    total2 = (total2+dado);

  console.log(dado);

}
console.log('Totale Giocatore 1 ====> ' + total1);
console.log('Totale Giocatore 2 ====> ' + total2);
console.log(" ");

if (total1 > total2)
  console.log('Vince il Giocatore 1');
else if (total1 === total2)
  console.log('PAREGGIO!!!');

else
  console.log('Vince il giocatore 2');
