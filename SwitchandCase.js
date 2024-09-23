/* Switch = Usado para realizar diferentes ações com base em diferentes condições no mesmo bloco de verificações.
Se a condição não for compativel não será executada e o valor padrão será acionado. Se as condições não forem executadas, 
ele vai executar o default.

Switch = Também é equivalente ao valor comparativo (==)
*/

/*switch (expressão){
    case a: // Case = O que acontece (Caso seja)
        break; //parada do loop
    case b:
        break;
    case c:
        break;
    default:
        break;        
}*/


function VerficCor(){
let cor = document.getElementById("cor").value; //valor digitado o input
switch (cor){ // recebe a expressão da variavel "cor"
    case "azul": // verificação = caso seja azul
        document.body.style.backgroundColor = "blue"; // atributo para alteração de cor de fundo
            break; 
    case "vermelho":
        document.body.style.backgroundColor = "red"; 
            break;
    case "amarelo":
        document.body.style.backgroundColor = "yellow";
            break;
    default: // Caso nenhuma das opções acima seja viavel
        document.getElementById("teste").innerHTML = "Nenhuma cor disponivel para: "+cor;
            break; 
}  
} 
/*
Lembrete => Esse caso é bem literal, 
portanto se for digitado qualquer número ou letra diferente ele não executa a função.
Uma alternativa para isso seria o .toUpperCase() ou .toLowerCase() em caso de string.
Porque esses atributos funcionam para alterar as letras para maiúsculo ou minúsculo.

Example: 
    cor = cor.toLowerCase();
    cor = cor.toUpperCase();
*/

function VerFicDay(){
    var dia = parseInt(document.getElementById("dia")).value;
    
    switch(dia){
        case 0:
            dia = "Domingo";
                break;
        case 1:
            dia = "Segunda-feira";
                break;
        case 2:
            dia = "Terça-feira";
                break; 
        case 3:
            dia = "Quarta-feira";
                break;
        case 4:
            dia = "Quinta-feira";
                break;
        case 5:
            dia = "Sexta-feira";
                break;
        case 6:
            dia = "Sábado";
                break;
        default:
            document.getElementById("Dia").innerHTML = "Tente Novamente!"
                break;
    }
    document.getElementById("Dia").innerHTML = "Hoje é dia "+day;
}