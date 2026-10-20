// let nomes = ["Paula Ribeiro","Ana Julia","Israel de Oliveira"];

// //Enquanto é um laço de repetição que sempre irá rodar enquanto a condição passada for verdadeira
// let contador = 0
// while (contador < 10) {
//     alert(contador);
//     contador ++
// }



// let contador = 0
// while (contador <= 20) {
//     console.log(contador);
//     contador = contador + 2
// }
// let nomes = prompt("Digite um nome: ");
// while (nomes != "admin" ){
//      nomes = prompt("Digite outro nome, pois esse não foi: ")

// }
// alert("Acesso Liberado!")

// let indice = 0
// let encerrar = 0

// nomes.length) {
//     console.log(nomes[indice]);
//     nomes.splice(indice, 1);
//     console.log(nomes)
    
// }

// let nomes = ["Paula Ribeiro","Ana Julia","Israel de Oliveira","Bruno Fernandes","Zacarias"];

// //Ordena os itens do array em ordem alfabetica

// nomes.sort();

// nomes.forEach(nome =>{
//     console.log(nome);
// })
// let indice = nomes.indexOf("Israel de Oliveira")
// nomes.splice(indice,1);

// console.log(nomes);

let receitas = ["Ovo Cozido","Bolo de Cenoura","Suco de uva","Bolo de Chocolate","Suco de Limão"]
receitas.sort()
receitas.forEach(receita =>{
    console.log(receita);
})
alert(receitas)

let pesquisado = prompt("Digite o nome da receita que você deseja excluir : ")
let indice = receitas.indexOf(pesquisado)
receitas.splice(indice,1)
console.log(receitas)


receitas = ["Ovo Cozido","Bolo de Cenoura","Suco de uva","Bolo de Chocolate","Suco de Limão"]
receitas.sort()
receitas.forEach(receita =>{
    console.log(receita);
})





