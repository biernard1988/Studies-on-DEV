// 5! = 5 x 4 x 3 x 2 x 1 = 120 (fatorial)

function fatorial(n) {
  let fat = 1;
  for (
    let c = n;
    c > 1;
    c--
  ) /*enquanto contador for maior que 1, contador perde 1*/ {
    fat *= c;
  }
  return fat;
}

console.log(fatorial(5));
