//Matizes

/*let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]; 
console.log(matriz);*/

// posição = 0 + 1 + 2 + 3 + 4
let idade = [25, 49, 24, 32, 78];
//console.log(`Elementos do array: ${idade}`);

let matriz = [
    20, 5, 89,     
    42, 77, 18, 56,
    15, 74, 63, 95
];
//console.log(`Os números pares são:\n ${matriz[3]}, ${matriz[0]}, ${matriz[5]}`);

/*function pareimpar(N){ 
  let i = 0;
    if (i <= matriz && i%2 !== 0){
      i++;
    }
    return i;
}
pareimpar(20)*/

/*function pareimpar(){
  for (let i = 0; i<matriz.length; i++)
    if(matriz[i]%2==0){
      console.log(matriz[i])
    }
}*/

let pares = matriz.filter(function(numero){ // filter é uma função que filtra os elementos de um array
    return numero%2 == 0;
}); console.log(`Números pares:  ${pares}`);

/*const wave = [65, 98, 47, 32, 74] //4x4

let i = 0;
    while (i <= wave.length){
        i++;
    }console.log("Soma: "+i);


if (i = wave += wave){
        console.log("A soma é: "+i)
    }*/

//

const num = [
    45, 19, 88, 
    23, 57, 12,
    33, 41, 28, 75];

//Exercicio 3;
    let v = Math.max(...num);  // Math.max() é uma função que retorna o maior valor de um array

    console.log(v);

//Exercicio 4    
let i = num.sort(function(num , i) {return num - i}); //num.reverse()
console.log(i);

/*Outra forma
for (let i =1; i < num.length; i++){
    if(num[1] > maiorNum){
        maiorNum = num[1];
    } console.log(maiorNum);
}*/


//Exercicio 5
let maior50 = num.filter(filtragem); 
function filtragem(value, index, array){ 
    return value > 50;
}
//outra forma
bet50 = 0;
for (let i = 0; i < num.length; i++){  //num.forEach()

    if(num[1]>50){ 
        bet50++
    }
} console.log(bet50);


const fruit = ['maçã' , 'pêra' , 'banana' , ' uva' , ' manga'];
let y = fruit.slice([2]);
console.log(`Hoje tem ${y}!!`);
