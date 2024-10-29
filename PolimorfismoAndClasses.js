//Herança e Polimorfismo
class Animal{
    som(){
        return "Som de animal";
    }
}
class Cachorro extends Animal{
    som(){
        return "Au au";
    }
}
class Gato extends Animal{
    som(){
        return "Miau miau"
    }
class Loro extends Animal{
    som(){
        return "Rah!! Loro quer biscoito!";
    }
}    

const meuCachorro = new Cachorro;
const meuGato = new Gato;
const meuLoro = new Loro;
console.log(meuCachorro.som());
console.log(meuGato.som());
console.log(meuLoro.som());

//Classes
/*
Crie uma classe Matematica com um método estático somar(a, b) que 
retorna a soma dos dois números.
*/ 
class Matematica{
    static somar(a, b){ 
        return a + b;
    }
}
console.log(Matematica.somar(45,86));

/* Static = é usada para definir um método ou propriedade que pertence à própria classe, e não às instâncias da classe. 
Isso significa que um método estático pode ser chamado sem criar uma instância da classe.

Quando você define um método como static, ele se torna parte da classe em si, e não de suas instâncias. Isso significa que:

> Você não precisa criar uma instância da classe para chamar o método estático.
> O método estático não tem acesso às propriedades da instância da classe.
> O método estático pode ser chamado usando o nome da classe, seguido do nome do método.

Vantagens de usar static em JS

> Permite criar métodos que podem ser chamados sem criar uma instância da classe.
> Pode ser usado para criar métodos de utilidade que não dependem de uma instância específica da classe.
> Pode ser usado para criar métodos que devem ser compartilhados entre todas as instâncias da classe.

Diferença entre métodos estáticos e métodos de instância

> Métodos de instância são chamados em uma instância específica da classe e têm acesso às propriedades da instância.
> Métodos estáticos são chamados na classe em si e não têm acesso às propriedades da instância.
*/ 

/*
Crie uma classe Retangulo com os atributos largura e altura. 
Adicione um método calcularArea que retorne a área do retângulo.
*/

class Retangulo{
    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea(){
        return this.altura * this.largura;
    }
}
let ret = new Retangulo(15, 25);
console.log(`A área do retângulo é: ${ret.calcularArea()}`);