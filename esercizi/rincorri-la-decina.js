var i = 0;
var x = 0;
do {
 i++;
 x++;
 if (x < 10){
   var raw = ("\n"+i);
   console.log(raw);
   x = 0;
} else {
  console.log(i);
}
} while (i < 100);

console.log('end');
