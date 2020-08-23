console.log(range(7));
compreso();

var eCompreso;
var giorno;

function compreso(eCompreso){
switch (giorno) {
    case 1:
    console.log('Lunedì');
    break;
    case 2:
    console.log('Martedì');
    break;
    case 3:
    console.log('Mercoledì');
    break;
    case 4:
    console.log('Giovedì');
    break;
    case 5:
    console.log('Venerdì');
    break;
    case 6:
    console.log('Sabato');
    break;
    case 7:
    console.log('Domenica');
    break;
  default:
  console.log('Non è un giorno della settimana.');
  }
}


function range(numero){
  if (numero>0 && numero<8) {
    eCompreso = true;
    giorno = numero;
    return true;
  } else {
    return false;
  }
}
