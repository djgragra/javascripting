var n = 10;
quanteCifre(n);

function quanteCifre(numero) {
  let x = numero.toString();
  if (x >= 0 && x <=9) {
    console.log(x.length + ' cifra');
  }else if (x >= 10 && x <= 9999){
    console.log(x.length + ' cifre');
  }else {
    console.log('Hai inserito un numero troppo grande');
  }
}
