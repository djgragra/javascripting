var N = 10;
var Q = 10;

var numbers = [];

for (var i = 1; i <= N; i++) {
  var number = Math.floor(Math.random()*(Q - 0)+1);
    numbers.push(number);
}
console.log(numbers);

var revnumbers = numbers.reverse();
console.log(revnumbers);
