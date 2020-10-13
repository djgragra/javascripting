var array = [4, 1, 9, 2, -2, 11, 10, -6];
console.log('Array non ordinato\n' + array);
var new_array = [];


while (array.length != 0) {
    var numero = Math.max(...array);
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
        var numero = Math.max(...array);
        var remove = array.indexOf(numero);
        new_array.push(numero);
        array.splice(remove, 1);
    }
    new_array.reverse();

}