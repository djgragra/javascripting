var pets = ['cat', 'dog', 'rat'];

//for ( var i = 0; i < pets.length; i++ ){
//  pets[i] = pets[i] + 's';
//}

pets.forEach(function (item, index, arrey) {
  arrey[index] = item + 's';
});



console.log(pets);
