//Definindo classe
class Pessoa { // == Estrutura relacionada ao obj
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    apresentar(){
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos!`)
    }
}

//chamar método da classe dos objetos
pessoa1.apresentar();
pessoa2.apresentar();

class Endereco {
    constructor(rua, cep, cidade){
       this.rua = rua
       this.cep = cep
       this.cidade = cidade 
    }
   apresentar(){
    console.log(`Meu endereço é: ${this.rua}, CEP: ${this.cep}, cidade: ${this.cidade}`)
   }
}

//Instanciação/criação de obj a partir da classe
const pessoa1 = new Pessoa("Daiane", 30);
const pessoa2 = new Pessoa("Bobby Charlton", 18);

//Criando um objeto
let caminhao = {
    marca: "Volkswagem", //propriedade: chave é 'marca', valor é "Volkswagem"
    modelo: "Constellation",
    ano: 2024,
    cor: "prata",
    cabine: [
        { tipo: 'simples', capacidade: 2, teto: 'fechado' },
        { tipo: 'dupla', capacidade: 5}
    ],

    ligar: function(){
        console.log("O caminhão está ligado.");
    },
    desligar: function(){
        console.log("O caminhão está desligado.")
    }
};
//Acessando suas propriedades
console.log(caminhao.marca);
console.log(caminhao["ano"]);
console.log(caminhao.cabine[0].teto);
console.log(caminhao["marca"]);

//Chamando a função {Método} do obj
caminhao.ligar();

