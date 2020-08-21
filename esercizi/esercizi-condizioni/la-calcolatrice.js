var a = 70
var b = 5
var x = 'media'

switch (x) {
  case 'somma':
    console.log(a+'+'+b + ' fa ' + (a+b));
    break;
  case 'sottrazione':
    console.log(a+'-'+b + ' fa ' + (a-b));
    break;
  case 'moltiplicazione':
    console.log(a+'x'+b + ' fa ' + (a*b));
    break;
  case 'divisione':
    console.log(a+':'+b + ' fa ' + (a/b));
    break;
  case 'modulo':
    a = Math.round(a);
    b = Math.round(b);
    console.log('Il resto tra ' + a + ' e ' + b + ' è ' + (a%b));
    break;
  case 'potenza':
    console.log('La potenza tra ' + a + ' e ' + b + ' è ' + (a**b));
    break;
  case 'media':
    console.log('La media tra ' + a + ' e ' + b + ' è ' + ((a+b)/2));
    break;
  default:
    console.log("L'operatore inserito non è ammesso");

}
