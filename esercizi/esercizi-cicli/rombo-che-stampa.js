var x = 17;
const txt = "X";

var y = (x - 1)/2;
var k = y+1
/*
for (var i = 1; i <= y + 1; i++) {
  console.log(txt + i);
}
*/
i = 0
while (i <= y + 1) {
  console.log("\t" + txt);
  i++
}




for (i = y; i > 0; i--) {
  console.log(txt + i);

}

console.log(y + ' END');
