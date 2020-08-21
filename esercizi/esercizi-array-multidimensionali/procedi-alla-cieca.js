var matrix = [];

for (var i = 0; i < 10; i++) {
  matrix[i] = [];
  for (var j = 0; j < 10; j++) {
    var num = Math.ceil(Math.random() * (100-1) + 1);
    matrix[i].push(num);
  }
}

console.log(matrix.join('\n'));
