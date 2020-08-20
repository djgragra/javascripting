/*
var tabellone = [
  ['x','|', 0, '|', 1, '|', 2, '|', 3, '|', 4, '|', 5, '|', 6, '|', 7, '|', 8, '|', 9, '|', 10],
  [0],
  [1],
  [2],
  [3],
  [4],
  [5],
  [6],
  [7],
  [8],
  [9],
  [10],
];

for (var i = 1; i < 12; i++) {
  for (var j = 2; j < 23; j+= 2) {
    var numero = tabellone[0][j] * tabellone[i][0];
    tabellone[i].push('|');
    tabellone[i].push(numero);

  }
}

console.log(tabellone.join('\n'));
*/

const tabellone = [];
let s = "x ";

for (let i = 0; i < 11; i++) {
    s += `| ${i} `;
    tabellone[i] = [];
    for (let j = 0; j < 11; j++)
        tabellone[i][j] = i * j;
}

console.log(s);

for (let i = 0; i < 11; i++)
    console.log(`${i} | ${tabellone[i].join(' | ')}`);
