let num = [32, 69, 23, 52, 10];
num.push(1); /* adiciona o valor no inicio */
num.sort(); /* organiza valores */
/*num.push(1);  adiciona o valor no fim */

console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
let pos = num.indexOf(69);
if (pos == -1) {
  console.log(`O valor não foi encontrado!`);
} else {
  console.log(`O valor está na posição ${pos}`);
}
