//Funcion = Um trecho de código que só é executado quando chamado.
    //Function Void(Vazia)
        //Function com Parametro(s)
            //Function Return
                //Arrow Function

//(Para rodar com Code.Runner(Ctrl + Alt + N))

//Function Void = Incrementando valores sem  retorno
let valor = 20;
    function incrementa(){ //Responsável por alterar o valor dentro do código
        //console.log("Estou dentro da função!");
            valor = valor + 30; 
} 
incrementa() //Chamando a função
//console.log(valor);

//Function com Parametro(s)
function mostrarNome(nome){ //Parametro = nome || Serve para que a function receba valores
//Com esse recurso pode-se chamar a função varias vezes
        //console.log(nome);
} mostrarNome("Steffany");
function soma(num1, num2){  //Parametro = num1 || num2 || Serve para que a function receba valores
    //console.log(num1 + num2)
    const somaDosNumeros = num1 + num2;
    console.log(somaDosNumeros);
}
soma(45, 20);
soma(86, 97);

//Function Return
function soma(num3, num4){
    const somaDosNumeros = num3 + num4;
    return somaDosNumeros; //Retorna o valor da soma
}
const calcule = soma(45, 20);
//console.log(calcule);

//Arrow Function = Mais rápida e consiza
let mult = () => { num1 * num2;
    let result = [25, 35];
        console.log(result);
};

/* Função Fatorial
function factorial(n){
    var result = 1;
    for (let i = n; i > 1; i--){
        result = result * i;
    } return result;
} 
factorial(8)*/

/* Função Recursiva
function factorialRec(n){
    if (n === 0) return 1;
    if (n === 1) return 1;
    return n * factorialRec(n - 1);
}
factorialRec(8)*/

/* Fibonacci Recursiva
function fibo(n){
    if (n === 1) return 1;
    if (n === 2) return 2;
    return fibo(n - 1) + fibo(n - 2);
}
fibo(7) */

/* Com números primos
function ePrimo(){
    if  (num % 2 === 0 && num % 3 === 0) { // números divisiveis por 2 e 3 não são primos
    console.log("Não é PRIMO!");
}  else{
    console.log("É primo!");
}
}*/