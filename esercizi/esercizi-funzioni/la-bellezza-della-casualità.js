var n = 10;

randomNumber(n);

function randomNumber(numero) {
  let x = numero + 1;
  let y = Math.floor(Math.random() * (x - 0));
  console.log(y);
  return y;

}
