var parole = 'i topi non avevano nipoti';

palindromo(parole);

function palindromo(frase) {
  let f1 = frase.replace(/\W/g, "");
  let f2 = [...f1].reverse().join(''); // inverte la stringa

if (f1 === f2) {
  console.log('true');
}else {
  console.log('false');
}

}
