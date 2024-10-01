var interruptor = "on";

if (interruptor === "on"){
  alert("A lampada está ligada!")
}else {
  alert("A lampada está desligada!")
}


const notas = [9.3, 7.5, 6.4, 9.8, 5.0]; //Valor em array

//O código começa definindo um array notas com 5 notas de um aluno. Em seguida, calcula a média dessas notas com a fórmula:
media = (2 * notas[0] + 3 * notas[1] + 4 * notas[2] + notas[3]) / 10;
//Essa fórmula pondera as notas de acordo com os pesos 2, 3, 4 e 1, respectivamente. O resultado é dividido por 10 para obter a média.

//Em seguida, o código imprime a média com uma precisão de uma casa decimal utilizando o método toFixed(1):
//console.log(`Media: ${media.toFixed(1)}`);

//Agora, o código verifica o resultado da média e imprime uma mensagem de acordo com o seguinte critério:
if(media >= 7.0){   //Se a média for maior ou igual a 7.0, imprime "Aluno aprovado."
  //console.log("Aluno aprovado.");
}else if (media < 5.0){    //Se a média for menor que 5.0, imprime "Aluno reprovado."
  //console.log("Aluno reprovado.");
}else{   //Se a média estiver entre 5.0 e 7.0, imprime "Aluno em exame." e solicita uma nota de exame.
  //console.log("Aluno em exame."); //Se o aluno estiver em exame, o código solicita uma nota de exame e imprime:
  let exame = parseFloat(lines.shift());
  //console.log(`Nota do exame: ${exame.toFixed(1)}`);

//Em seguida, calcula a média final com a nota de exame:
  media = (media + exame) / 2;

//Por fim, o código verifica a média final e imprime:
  if(media >= 5.0){ //Se a média final for maior ou igual a 5.0, imprime "Aluno aprovado."
    //console.log("Aluno aprovado.");
  }else{ //Se a média final for menor que 5.0, imprime "Aluno reprovado."
    //console.log("Aluno reprovado.");
  }
  //E imprime a média final com uma precisão de uma casa decimal:
  //console.log(`Media final: ${media.toFixed(1)}`);
}

/* Utlizando o IF e Else de uma linha só
Ternário = IF / Else
 ? = If
  : = Else
*/  