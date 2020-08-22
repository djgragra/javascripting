const M = 3;
const N = 2;
var sum = 0;
var matrix = new Array(N);

for (let i = 0; i < matrix.length; i++) { //matrix.length corrisponde a N
  matrix[i] = new Array(M);
  for (let j = 0; j < matrix[i].length; j++) { //matrix[i].length corrisponde a M
    matrix[i][j] = Math.ceil(Math.random() * 100);
    sum += matrix[i][j];
  }
}

console.log(matrix);
console.log('Sum is ' + sum);

var R = new Array(N);
var C = new Array(M);
var sumR0 = 0;
var sumR1 = 0;

//Somma delle righe
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (i == 0) {
    sumR0 += matrix[i][j];
    R[0] = sumR0;
  } else {
    sumR1 += matrix[i][j];
    R[1] = sumR1;
   }
 }
}

//Somma delle colonne
for (let i = 0; i < matrix[0].length; i++) {
  C[i] = matrix[0][i] + matrix[1][i];
}

console.log(R);
console.log(C);
