/*
//versione con IF
var v = 30

if(v < 18)
  console.log('insufficiente');
else if(v >= 18 && v < 21)
  console.log('sufficiente');
else if(v >= 21 && v < 24)
  console.log('buono');
else if(v >= 24 && v < 27)
  console.log('distinto');
else if(v >= 27 && v <= 29)
  console.log('ottimo');
else if(v = 30)
  console.log('eccellente');
*/

//versione SWITCH
const v = 20

switch (v) {
  case 14:
  case 15:
  case 16:
  case 17:
    console.log('insufficiente');
    break;
  case 18:
  case 19:
  case 20:
  case 21:
    console.log('sufficiente');
    break;
  case 22:
  case 23:
  case 24:
    console.log('buono');
    break;
  case 25:
  case 26:
  case 27:
    console.log('distinto');
    break;
  case 28:
  case 29:
    console.log('ottimo');
    break;
  case 20:
    console.log('eccellente');
    break;
  default:
    console.log('inserisci un voto compreso tra 14 e 30');

}
