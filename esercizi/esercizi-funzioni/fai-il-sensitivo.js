distanza(1, 6, 11);

function distanza(A, N, B){
  let left = N - A;
  let right = B - N;
  if (left < right) {
    console.log(-1);
  }
  else if (left > right) {
    console.log(1);
  }
  else if (left === right) {
    console.log(0);
  }

}
