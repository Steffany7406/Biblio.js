/*Array (Matriz) = Cojunto de elementos que precisam ser do mesmo tipo
#Variavel Composta =  Uma variavel que pode conter varios valores, pode ser do tipo array ou não.
#Listas = Cojunto de elementos que podem ser de qualquer tipo
#Tuplas = Cojunto de elementos que precisam ser do mesmo tipo, imutavel
L = Quando trabalhamos com arrays trabalhamos com listas com posições sempre começado do zero.
// (.lenght) => Tamanho do array

Example:
const lista = ["arroz" , "feijão" , "leite" , "macarrão"];

A lista[0] = (lista na posição 0) contém o valor "arroz";
A lista[2] = (lista na posição 2) contém o valor "leite";
*/

const lista = [
    'arroz' , // posição[0]
    'feijão' , // posição[1]
    'brócolis' , // posição[2]
    'macarrão', // posição[3]
    'leite'   // posição[4]
];
console.log(lista[3])

//Outra forma de criar array
//const lista = new Array( 'arroz' , 'feijão' , 'brócolis' ,'macarrão', 'leite')

// [Pegando um valor especifico}
const lista1 = ['arroz' , 'feijão' , 'brócolis' ,'macarrão', 'leite']
let x = lista[3] 
// console.log(x)

// [Mudando a posição do array substituindo valores}
const lista2 = ['arroz' , 'feijão' , 'brócolis' ,'macarrão', 'leite'] //Array
lista2[1] = 'café'; // apontando a posição dentro da matriz 
console.log(lista2[1]) // Exibindo o novo valor da posição

// [Quantidade de itens}
const people = ["Steffany" , "paiva" , 24] //Array
people[0]; //Para chamar a matriz
people.length; //Para saber a quantidades de itens dentro da matriz
// Ou seja, 
console.log(pessoa[pessoa.length -1]) // Porque a matriz sempre começa em Zero e vai tirar (-1) 
// pessoa.length -1 => tamanho da matriz -1

// [Objeto => São construidos de forma diferente}
//Para um item especifico com varias propriedades dentro dele
const pessoa = {nome:"Steffany", sobrenome:"Paiva", idade:24} //Objeto = Sempre com chaves {}
pessoa.nome; //para chamar o objeto

// [Acrescentando item na matriz}
const people2 = ["Steffany" , "paiva" , 24, "Design"];
people2.push("brasileira"); // Para adicionar mais itens dentro da matriz
console.log(people2); // Exibindo a matriz com + o item acima
people2[people2.length] = "Programadora"; //Outra forma de obter o mesmo resultado

// [Para saber se a variavel é realmente uma matriz}
Array.isArray(people2); // Retorna True = Verdadeiro
console.log(Array.isArray(people2));

// [Funções para Trabalhar com Matriz}

//Método Join(Example);
const people3 = ["Patricia" , "Paiva" , 49, "Administradora"];
document.getElementById("teste").innerHTML = people3;// Referenciando o Id para exibir os itens do array
document.getElementById("teste").innerHTML = people3.join(" * "); //Substitui a virgula por asterisco

//Método Pop(Example);
const people4 = ["Patricia" , "Paiva" , 49, "Administradora"];
people4.pop(); //Vai remover o último item da matiz

//Método Shift(Example); Unshift(Example);
people4.shift(); // Para remover o primeiro item da matriz
people4.unshift("Carioca"); //Adiciona um item na primeira posição da matriz
// Lembre-se: Removendo ou adicionando o primeiro item da matriz todos os outros itens são alterados.

//Método Delete => Não é recomendável usar
delete people4[0]; // Você dá a posição que quer deletar e ele executa sem mudar as outras posições. 
//A primeira posição torna-se undefined, ou seja, indefinida.

//Método Splice(Example);
people4.splice(2, 0, "Carioca" , "Mora em Porto Real"); //Adiciona mais de um item na mesma posição sem remover os outros
// .splice (2 = indica a posição que você quer colocar)

// [Fusão de Matrizes} = Pode ser feita com quantas matrizes forem necessárias
const people2 = ["Steffany" , "paiva" , 24, "Design"];
const people5 = ["Patricia" , "Paiva" , 49, "Adm"]

const superPeople = people2.concat(people5); // Para fundir para uma lista só
// Sempre tem que atribuir uma nova variavel para fazer uma fusão

//Método slice(Example); = Fatiando Matrizes
//Fazer passar a valer apenas uma parte especifica não exibindo as outras
const players = ["Shaquille" , "Michael Jordan" , "Kobe Bryant" , "Devin Booker" , "LeBron James"]; 
const legends = players.slice(1,4); // Concatena as posições desejadas para fatiar e exibir a posição desejada.

//Método Sort(Example); / Reverse();
players.sort();//Para colocar em ordem alfabética
players.reverse(); // Ordem alfabética decrescente
// Para ordem Numeral 
players.sort(function (a , b) {return a - b}); //Aciona a função e dá o retorno em ordem numeral

// Para pegar o maior numero
const num = [500, 90, 20, 50, 800];
function MaiorNumero(array){ // Chama a função 
    return Math.max.apply(null, array); //Exibe o maior número da matriz
}
//Para o menor número
function MenorNumero(array){ // Mesmo método com diferença de atribuição
    return Math.min.apply(null, array);
}
// Para Filtrar os números 
const maior90 = num.filter(filtragem);
function filtragem (value, index, array){ //para filtrar e buscar os valores desejados
    return value > 90;
}
//Para verificar se tem o item no array
players.includes();

// Para Filtrar os números 
/* = Cria um novo array filtrando os valores desejados do array original
Três dados: Item por item do Array,
Posição atual do array,
Array completo
*/
const maior90 = num.filter(filtragem);
function filtragem (value, index, array){ //para filtrar e buscar os valores desejados
    return value > 90;
}

/*var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');
Esse código lê toda a entrada da entrada padrão () e a armazena na variável. 
Em seguida, ele corta a entrada (remove os espaços em branco à esquerda e à direita) e 
a divide em uma matriz de linhas usando o caractere de nova linha () como separador./dev/stdininput\n
*/

//Método Split()
people5.split() /*divide uma string em duas ou mais substrings, 
                dependendo de um separador (ou splitter). 
                Esse separador pode ser um único caractere, 
                outra string ou até mesmo uma expressão regular.*/

// Manipular Array

// Método MAP = criar um novo array multiplicando todos os valores por 2.
// Sempre mantendo o mesmo número de itens do primeiro
// Mapeando item por item do array
// E com o novo você pode alterar o que quiser em relação ao original
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map(numbers => numbers * 2); //Usando a  função flexa para multiplicar os números.
console.log(doubleNumbers);

//Outras formas
// index = pega as posições dentro do array
const doubleNumbers2 = numeros.map((numbers, index, arrayCompleto) => {
    return numbers * 6
});
console.log(doubleNumbers2);

//Com banco de dados!! = Orientado a objetos
const produtos = [
    {id: 1, nome: "Smartphone Galaxy S21", preco: 3999.99, temDesconto: true, quantidade: 1,},
    {id: 2, nome: "Notebook Dell Inspiration", preco: 4500.00, temDesconto: false, quantidade: 3,},
    {id: 3, nome: "Smart TV LG 55", preco: 2799.00, temDesconto: true, quantidade: 5,},
    {id: 4, nome: "Fone de ouvido JBL", preco: 299.90, temDesconto: false, quantidade: 2,},
    {id: 5, nome: "Câmera DSLR Canon", preco: 3200.00, temDesconto: true, quantidade: 1,},
    {id: 6, nome: "Tablet IPad Air", preco: 4199.00, temDesconto: false, quantidade: 8,},
    {id: 7, nome: "Console PlayStation 5", preco: 4699.00, temDesconto: true, quantidade: 2,},
    {id: 8, nome: "Smartwatch Apple Watch", preco: 2499.00, temDesconto: false, quantidade: 7,},
    {id: 9, nome: "Impressora HP Multifuncional", preco: 599.90, temDesconto: true, quantidade: 5,},
    {id: 10, nome: "Caixa de Som Portátil Sony", preco: 1000.00, temDesconto: false, quantidade: 3 }
];
// A necessidade aqui é criar um novo array, formatando a moeda e dando desconto aos clientes
const novosProdutos = produtos.map( produtos => { // criando novo array com a arrow function

//Se o produto tem desconto ele deve ter 10% de desconto, se não o valor permanece
const novoPreco = produtos.temDesconto ? produtos.preco * 0.9 : produtos.preco;

    return{
        id: produtos.id,
        nome: produtos.nome,
        preco: novoPreco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}), //formatando o preco para exibir com virgula
        //currency : 'BRL' para exibir o preco com moeda
        quantidade: produtos.quantidade
    }
});
console.log(novosProdutos);

//Método Reduce =  é usado para reduzir um array inteiro em um único valor.
//Ou seja, quer saber a soma de todos os valores do array
/*
 - Dá acesso a 4 dados:
    - Acumulador : valor que está sendo acumulado 
    - valor Atual  : valor que está sendo processado
    - Posição Atual  : posição do valor que está sendo processado
    - Array Completo  : array inteiro que está sendo processado */
//Base
const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acumulador, atual) => {
    const total = acumulador + atual;
    return total;
});
console.log(soma);
