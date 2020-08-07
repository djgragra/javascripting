var input = 1;
var max = 9999;
var accumulator = input;

//for (var i = 0; i < (max*2); i++ ) {
//  accumulator += input;
//if( accumulator > max )
//  break;

//}

var count = 0;
while( accumulator < max) {
  accumulator += input;
  count++
}

  console.log(`Per arrivare a ${max} ci sono volute ${count} iterazioni ed è stato raggiunto il valore di ${accumulator}.`);
