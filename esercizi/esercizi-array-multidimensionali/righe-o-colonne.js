const M = 4; //colonne
const N = 7; //righe
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

var R = new Array();
var C = new Array();
sum = 0;


//Somma delle righe usando forEach
for (let i = 0; i < matrix.length; i++) {
  matrix[i].forEach(function(item, index) {
    sum += matrix[i][index];
  });

/*
// Somma delle righe usando For
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    sum += matrix[i][j];
  }
*/

  R.push(sum);
  sum = 0;
}

//Somma delle colonne
for (let i = 0; i < matrix[0].length; i++) {
  for (let j = 0; j < matrix.length; j++) {
    sum += matrix[j][i];
  }
  C.push(sum);
  sum = 0;
}

console.log(R);
console.log(C);
