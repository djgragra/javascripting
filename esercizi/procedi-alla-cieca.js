var matrix = [
[],
[],
[],
[],
[],
[],
[],
[],
[],
[],
];

for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; i++) {
    var num = Math.ceil(Math.random() * (100-1) + 1);
    var k = i
    matrix[k].push(num);
  }
}

console.log(matrix.join('\n'));


/*
while (fila[0].length < 10) {
  var num = Math.ceil(Math.random() * (100-1) + 1);
  fila.push(num);
  console.log(fila);
}


console.log(fila);
console.log(fila[0]);
console.log(fila[1]);
console.log(fila[2]);



/*
  fila[1] = []
  fila[2] = []
  fila[3] = []
  fila[4] = []
  fila[5] = []
  fila[6] = []
  fila[7] = []
  fila[8] = []
  fila[9] = []
*/
