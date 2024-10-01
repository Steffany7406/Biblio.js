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

//Agora qual é o faturamento vendendo todo o estoque?
const totalVendas = produtos.reduce((acumulador, produtos) => {

    return acumulador + (produtos.preco * produtos.quantidade)
}, 0)
console.log(totalVendas.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}));

//Usando Filter para encontrar produtos com desconto
const promocao = produtos.filter( produtos => produtos.temDesconto);
console.log(promocao);

const promo = produtos.filter( produtos => !produtos.temDesconto); //Com o operador de inverso (' ! ')
console.log(promo)

//Adicionar + 10 em cada produto || Filtra os em promoção || Saber o faturamento dos em promoção