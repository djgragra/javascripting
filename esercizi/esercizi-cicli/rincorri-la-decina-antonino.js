var i = 0;
var x = 0;
var raw = "";
do {
 i++;
 x++;
if(i == 1) {
  raw = i;
}
else
{
  raw = raw + " " + i;
}
 if (x >= 10){
   console.log(raw);
   raw = "";
   x = 0;
}
} while (i < 100);

console.log('end');
