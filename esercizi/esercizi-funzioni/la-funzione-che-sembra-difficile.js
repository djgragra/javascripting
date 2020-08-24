Kennesima(3456789, 5);

function Kennesima(N, K) {
  var n = N.toString();
  //var k = K.toString();

  if (n.length > K) {
    var res = n.charAt(n.length - K);
    console.log(res);
} else if (n.length == K){
    console.log(n.charAt(0));
  //} else if (K === 0) {
    //console.log(0);
  }
  else {
    console.log(0);
  }

}
