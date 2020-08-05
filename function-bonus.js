function replaceInArray(array, toSearch, newValue){
  for( var i = 0; i < array.length; i++ ){
    if(array[i] === toSearch){
      array[i] = newValue;
      break;
    }
  }
  return array;
}

var users = ['Alberto', 'Matteo', 'Michele', 'Mauro', 'Giova', 'Giustino', 'Leone'];
var fruits = ['pera', 'banana', 'mango', 'mela', 'kiwi'];

users = replaceInArray(users, 'Giova', 'Giovanni');
fruits = replaceInArray(fruits, 'mango', 'pera');

console.log(users);
console.log(fruits);
