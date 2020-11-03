"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var array = [4, 1, 9, 2, -2, 11, 10, -6];
console.log('Array non ordinato\n' + array);
var new_array = [];

while (array.length != 0) {
  var numero = Math.max.apply(Math, array);
  var remove = array.indexOf(numero);
  new_array.push(numero);
  array.splice(remove, 1);
}

console.log('Array ordinato decrescente\n' + new_array);
new_array.reverse();
console.log('Array ordinato crescente\n' + new_array);

function ordina(array) {
  var new_array = [];

  while (array.length != 0) {
    var numero = Math.max.apply(Math, _toConsumableArray(array));
    var remove = array.indexOf(numero);
    new_array.push(numero);
    array.splice(remove, 1);
  }

  new_array.reverse();
}