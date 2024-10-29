/*Esta fórmula é usada para encontrar as raízes de uma equação quadrática da forma 
a x 2 +  b x + c = 0, onde a, b e c são números reais. 
*/


function bhaskara(a, b, c) {
  let delta = b * b - 4 * a * c; // Calcula o discriminante

  if (delta < 0) { // Se o discriminante for negativo, a equação não tem raízes reais
      return "A equação não possui raízes reais."; 
  }

  let x1 = (-b + Math.sqrt(delta)) / (2 * a);  // Calcula a primeira raiz
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);   // Calcula a segunda raiz

  return { x1: x1, x2: x2 };  // Retorna as raízes
}

// Exemplo de uso
let a = 1; // Coeficiente de x^2
let b = -3; // Coeficiente de x
let c = 2; // Coeficiente constante

let resultado = bhaskara(a, b, c);  // Chama a função bhaskara com os coeficientes
console.log(`As raízes da equação são: x1 = ${resultado.x1}, x2 = ${resultado.x2}`);   // Imprime as raízes
