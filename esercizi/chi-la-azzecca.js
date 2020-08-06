var A = 78;
var B = 28;
var random = (Math.random() * (100-1) + 1);
random = Math.floor(random)
console.log('Il Giocatore 1 hai scelto ' + A);
console.log('Il Giocatore 2 hai scelto ' + B);
console.log('Ho estratto il numero ' + random);

  var differenzaA = (random - A)
  differenzaA = Math.abs(differenzaA)
//  console.log(differenzaA);

  var differenzaB = (random - B)
  differenzaB = Math.abs(differenzaB)
//  console.log(differenzaB);

if (random === A)
  console.log('Complimenti Giocatore 1 hai indovinato il numero estratto');
  else if (random === B)
    console.log('Complimenti Giocatore 2 hai indovinato il numero estratto');
      else if (differenzaA < differenzaB)
        console.log('Nessuno dei due ha azzeccato il numero estratto, ma il Giocatore 1 si è avvicinato di più!');
          else
            console.log('Nessuno dei due ha azzeccato il numero estratto, ma il Giocatore 2 si è avvicinato di più!');
