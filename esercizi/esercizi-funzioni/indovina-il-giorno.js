var gg = 3
day(gg);
wday(gg);
function day(num) {
  if (num >= 1 && num <= 7) {
    console.log(num + ' TRUE');
    return 'TRUE';
  }
  else {
    console.log(num + ' FALSE');
    return 'FALSE'

  }
}

function wday(wnum) {
  switch (wnum) {
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
     console.log('Peccato, non posso indovinare il giorno.');

  }
}
