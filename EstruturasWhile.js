// while = enquanto (expressão boleean)
//executa o código até que a expressão boleeana seja falsa
/*while (i < 10) {
    var i = 0;
    console.log("O valor de i é: "+i)
    i++
}*/

/* Macete se o log for escrito por dentro do while
while {
    .log(i) => Ele escreve em coluna
}.log(i) => Ele escreve em linha
*/

var cont = 0
while (cont <= 10) {
    cont++
  console.log("Hoje tem "+cont+" Maçãs!");  
} 

// do = faça enquanto
do {
    console.log("Hoje tem "+cont+" Maçãs!");
    cont++
} while (cont < 10)

/* Ordem decrescente
var i = 10;
while (i > 0){
    console.log(i);
    i--
}*/

// !== (Estritamente não igual)

/*variavel i = 1;
while (i <= 20) { enquanto i for menor ou igual a vinte
    if (i % 2 !== 0) { se i for impar e estritamente diferente de zero
        console.log(i); imprima o valor de i
    }
    i++; = i+1
}*/

/*
var i = 0, count = 0; => {Variaveis}
do { => {faça(loop)}
    var n = parseInt(prompt('digite um número: '));   => {entrada de dados}
    if (n > 100) {    => {se o numero for maior que 100}
        count++;      => {conte mais um}
    }
    i++; => {i + 1}
} while(i < 100);     => {enquanto i for menor que 100}
alert(`Existem ${n} números maiores que 100`);

*/
let i = 0;
let n = 1;

while (n <= 50) { // enquanto o número for menor ou igual a 50
    i += n; // soma as variaveis 
    n++; // incrementa a variavel n
} console.log("A soma dos números de 1 a 50 é: " +i); // imprime a soma dos números de 1 a 50


// Percorrendo a string
let array = "Olá, mundo!"; //variavel array
let v = 0; // valor da expressão
//length = tamanho do array
while (v < array.length) { // enquanto V for menor que a quantidade de string(array)
    v++; // soma 1 a variavel V
} console.log(array) // exibe a variavel array 

// Percorrendo o array com loop para negativo
let numero; //variavel vazia
do {
    numero = parseFloat(prompt("Insira um número (insira um valor negativo para sair):"));  // entrada de dados
} while (numero >= 0);  // enquanto o número for maior ou igual a 0

alert("Você inseriu um número negativo. O loop foi encerrado."); // mensagem de alerta 

// Loop while para sim ou não
let talk; 
do {
    var say = prompt("Você é maior de idade?"); 
    if  (say == "sim") {  // se a resposta for sim
       alert("Então bem-vindo ao jogo!!"); 
    }

} while (say >= "não"); 
     alert("Desculpe, você não pode jogar!") 


/* loop while que percorre um array e exibe seus 
elementos, mas deve parar se encontrar o valor "parar"*/
const arr = [1, 2, 3, 4, 5, 6];  // array de números
var length = arr.length;  // tamanho do array
let l = 0;  // valor da expressão
    while (l < length) {   // enquanto l for menor que é menor que o tamanho do array
       console.log(arr[l]);
       l++;
     }
     