const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    // initialize count
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    return count
}

// take input
let string = 'pitagora'; //prompt('Enter a string: ');

let result = countVowel(string);

console.log(result);