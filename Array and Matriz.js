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