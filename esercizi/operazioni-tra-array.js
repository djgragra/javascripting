var x = [7, 9, 1, 7, 9, 2];
var y = [7, 4, 3, 8, 5, 6];
var operatore = 'addizione';
var z = [];

for (var i = 0; i < x.length; i++) {
  var x1 = x[i];
  var y1 = y[i];

    switch (operatore) {
      case 'addizione':
        var a = x1 + y1;
        z.push(a);
        break;
      case 'sottrazione':
        var a = x1 - y1;
        z.push(a);
        break;
      case 'moltiplicazione':
        var a = x1 * y1;
        z.push(a);
        break;
      case 'divisione':
        var a = x1 / y1;
        z.push(a);
        break;
      default:
        console.log('OPERATORE NON AMMESSO');

    }
  }

console.log(`Prima array: ${x}\nSeconda array: ${y}\nRisultato ${z}`);
