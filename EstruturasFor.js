// for ({inicio}; {condição}; {incremento};){ debugger}

for (let i = 0; i < 10; i++){
    console.log(i);
}
//length = tamanho do array
    //Em JS, para colocar em colunas separamos as strings em virgulas
const U = ["Patricia" , "Steffany" , "Flor"]
for (let i = 0; i < U.length; i++){
    console.log(U[i]);
}
// for of = itera os itens do array
const game = ["Pac-man" , "The sims" , "Xadrez"]
for (let item of game){
    console.log(item);
}
// For in = Usado em array para andar item por item do objeto iterando suas propriedades
const user = {
    name: "Patricia",
    age: 49,
    occupation: "Administradora"
}
for ( let key in user){
    console.log(key, user[key]);
}   //para por em cada item .log(user["age"]) ou (user.age)
    // outra formas .log(user[key]) key = chave; user[key] = valor da chave
    // .log(´${key} : ${user[key]}´) para colocar em uma string

// for each = passar(iterar) por arrays
const books = [
    { where: "livro 1 " , about: "IoT " , date: "2020 "  },
    { where: "livro 2 " , about: "Java " , date: "2022" },
    { where: "livro 3 " , about: "HTML " , date: "2023" }
]
//Escreva o nome da sua variavel e nunca escreva for.Each com E minusculo
    //program = dados contidos na posição atual do array
    //index = Numero da posição. Sempre começando com 0. (opcional)
    //array = retorna o array completo. (opcional)
    books.forEach((program, index, array) => {
        console.log(program);
        console.log(index);
        console.log(array);
    })
    

//.toUpperCase() = Converte em letra maiuscula
//.toLowerCase() = Converte em letra minuscula