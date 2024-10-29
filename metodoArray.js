const data = [
    {id: 1, name: "Germano", age:23, salary: 3000, active: true, team: "Frontend", bonus: 0 },
    {id: 2, name: "Allan", age:35, salary: 4000, active: true, team: "Backend", bonus: 0 },
    {id: 3, name: "Thais", age:26, salary: 6000, active: true, team: "FullStack", bonus: 0 },
    {id: 4, name: "Saulo", age:33, salary: 3800, active: true, team: "Frontend", bonus: 0 },
    {id: 5, name: "Wesley", age:26, salary: 4000, active: false, team: "Mobile", bonus: 0 }
];

// Find(encontrar) para percorrer a lista, passamos uma condição e ele vai ssatisfazer a condição e retornar o primeiro item que ele encontrar
//const user = data.find((user) => {
    //return user.age >= 25  Nesse caso, sendo maior ou igual a 25 ele retorna o primeiro que encontrar.
//})
//console.log(user);

//Filter percorrendo a lista e filtrando com base nas informações da condição
let users = data.filter((users) => {
    return users.salary >= 4000 && users.active;
})
//console.log(users)

//FindIndex pra você encontrar a posição de um item dentro do array
var indexUser = data.findIndex((indexUser) => {
    return indexUser.name == "Thais";  //Nesse caso, ele vai procurar a posição do item Thais

})
//console.log(indexUser) 
//console.log(data[indexUser].active = false); //Mudando um valor de um item dentro do array
//console.log(data[indexUser].active); //Retornando o valor que foi mudado

//Some(algum) para verificar se algum item dentro do array atende a condição
const userInactive = data.some((user) => {
    return user.active == false;
})
console.log(userInactive) //Ele devolver um valor booleano.

//Every(todo) para verificar se todos os itens dentro do array atendem a condição
var usersActive = data.every((users) => {
    return users.active == true;
})
console.log(usersActive) //Ele devolve os true e um false se algum item não atender a condição.
