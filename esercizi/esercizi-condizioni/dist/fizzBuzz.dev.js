"use strict";

fizzBuzz(30);

function fizzBuzz(n) {
  for (var i = 1; i <= 30; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz');
    } else if (i % 2 == 0 && i % 5 != 0) {
      console.log('Fizz');
    } else if (i % 3 != 0 && i % 5 == 0) {
      console.log('Buzz');
    } else if (i % 3 != 0 && i % 5 != 0) {
      console.log(i);
    }
  }
}