"use strict";

var vowels = ["a", "e", "i", "o", "u"];

function countVowel(str) {
  // initialize count
  var count = 0; // loop through string to test if each character is a vowel

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = str.toLowerCase()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var letter = _step.value;

      if (vowels.includes(letter)) {
        count++;
      }
    } // return number of vowels

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return count;
} // take input


var string = 'pitagora'; //prompt('Enter a string: ');

var result = countVowel(string);
console.log(result);