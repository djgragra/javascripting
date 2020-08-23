var a = 17
var b = 8
var c = 13

function maggiore(a, b, c){
  if (a > b && a > c) {
    return a
  }
  else if (b > a && b > c) {
    return b
  }
  return c
}

function minore(a, b, c){
  if (a < b && a < c) {
    return a
  }
  else if (b < a && b < c) {
    return b
  }
  return c
}

console.log('Il numero maggiore è ' + maggiore(a, b, c));
console.log('Il numero minore è ' + minore(a, b, c));
