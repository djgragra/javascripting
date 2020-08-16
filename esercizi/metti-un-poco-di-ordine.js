var array = [3, 6, 1, 7, 10, 2, 4, 5];
console.log('Array non ordinato\n' + array);
var new_array = [];


while (array.length > 0) {
  let numero = Math.max(...array);
  new_array.push(numero);
  let remove = array.indexOf(numero);
  array.splice(remove);


}

console.log(new_array);
//console.log(array);
