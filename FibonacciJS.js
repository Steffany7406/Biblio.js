let numA = 0;
let numB = 1;
let fibbi = '';

fibbi += numA + "\n" + numB
//console.log(fibbi)

for (let count = 1; count <= 3; count++){
  numC = numA+numB
  fibbi += "\n" + numC
  numA = numB;
  numB = numC;
} console.log(fibbi)

/* 
let quantNum = prompt("Informe o número:")
quantNum = parseInt(quantNum) => Convertendo para int ou float
*/ 

/*let quantNum = 5;
let termo1 = 0;
let termo2 = 1;
let nextTerm = 0;

console.log(termo1+"\n"+termo2);

for(let i=2; i <= quantNum; i++){
  nextTerm = termo1+termo2
  console.log(nextTerm)
  termo1 = termo2;
  termo2 = nextTerm;
}*/

function fibonacci(num) {
  let sequence = [0, 1];
  for (let i = 2; i < num; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}

const num = 10; // Número de termos na sequência de Fibonacci
console.log(fibonacci(num));

