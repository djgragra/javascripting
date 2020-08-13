var array = new Array();


                                   //creare l'array con i numeri random

 for (var i = 0; i < 4 ; i++) {
var random = Math.round(Math.random()*(50-1));
var x = random;
   array.push(x);
}
console.log(array);



                                        // permetti all'utenti di inserire il
   for (var i = 0; i <= array.length ; i++) {     //il numero

  var chiama1 = prompt('inserisci il numero')

   var x = array[i];

   if (x%chiama1 === 0 ) {
      array.shift(x)
console.log('multiplo',x,chiama1);
}
}
console.log(array);
