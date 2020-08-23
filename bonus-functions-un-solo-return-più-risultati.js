function calculator(one,two) {
  var addition = one + two;
  var substraction = one - two;
  var multiplication = one * two;
  var division = one / two;

  return [addition, substraction, multiplication, division];
}

var num = calculator(5,10);
console.log(num);
