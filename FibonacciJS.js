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

function fibonacci(num) { //  Função que calcula o n-ésimo termo da sequência de Fibonacci

  let sequence = [0, 1];  // Inicializando a sequência com os dois primeiros termos
  for (let i = 2; i < num; i++) {  // Loop que calcula os termos restantes da sequência

      sequence[i] = sequence[i - 1] + sequence[i - 2];   // Calcula o próximo termo como a soma dos dois anteriores
  }
  return sequence;   // Retorna a sequência calculada
}
const num = 10; // Número de termos na sequência de Fibonacci
console.log(fibonacci(num));  
