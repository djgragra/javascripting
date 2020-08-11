var n = 17;
var x = ``;
var space = (n - 1)/2;
var t = ``;
var n1 = n - 2;

for (i = 0; i < n; i = i + 2 ) {

  for ( e = 0; e < space; e++  ) {
    t += ` `;
    }

  space = space - 1;

  for( c = 0; c <= i; c = c + 1) {
    x += `x`;
  }

  console.log (`${t}${x}`);
  x = ``;
  t = ``;
}

space = 0;

for (i = 0; i < n; i = i + 2 ) {

  for ( e = 0; e <= space; e++  ) {
    t += ` `;
    }

    space +=  1;

    for( c = 0; c < n1; c = c + 1) {
      x += `x`;
    }

    n1 = n1 - 2;

    console.log (`${t}${x}`);
    t = ``;
    x = ``;
}
