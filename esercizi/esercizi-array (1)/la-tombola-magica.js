var mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var estrazione = [];
var win = [];

var x = Math.ceil(Math.random() * 90);

for (var i = 0; i < mynumbers.length; i++) {
    while (estrazione.includes(x))
        x = Math.ceil(Math.random() * 90);

    if (mynumbers.includes(x)) {
        win.push(x);
        estrazione.push(x);
    } else {
        estrazione.push(x);
    }

}

var winnumber = win.length;
console.log('I tuoi numeri ' + mynumbers + '\n' + '\n' + 'Numeri estratti ' + estrazione);

if (winnumber == 1) {
    console.log('\n' + 'Hai indovinato ' + winnumber + ' numero');
} else {
    console.log('\n' + 'Hai indovinato ' + winnumber + ' numeri');
}


switch (winnumber) {
    case 2:
        console.log('\n' + 'Hai fatto ambo');
        break;
    case 3:
        console.log('\n' + 'Hai fatto terna');
        break;
    case 4:
        console.log('\n' + 'Hai fatto quaterna');
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        console.log('\n' + 'Hai fatto cinquina');
        break;
    case 10:
        console.log('\n' + 'Hai fatto Tombola');
        break;
    default:
        console.log('\n' + 'Peccato, non hai vinto');
}