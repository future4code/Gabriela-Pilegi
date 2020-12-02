//EXERCÍCIO 1
// O código armazena na variável respostaDoUsuário a resposta para a pergunta do prompt e a transforma em número. Depois, caso o número digitado pelo usuário se encaixe na primeira opção (o resto da divisão por 2 ser igual a zero, ou seja, se o número for par), exibe a mensagem de que "Passou no teste."
// Se houver um resto diferente de 0 (se o número for ímpar), exibe a mensagem "Não passou no teste."

// EXERCÍCIO 2
// a) O código serve para precificar e imprimir no console o preço das frutas especificadas na lista.
// b) A mensagem impressa no console será "O preço da fruta maçã é R$2.25"
// c) Se retirar o break, o programa não vai "parar" naquele momento e vai assumir o valor abaixo (valor do default), que é R$5.

// EXERCÍCIO 3
// a) A primeira linha do programa está solicitando que o usuário digite um número, transformando-o em número e armazenando esse valor na variável numero.
// b) Se o usuário digitar 10, a mensagem será "Esse número passou no teste." Caso contrário, haverá um erro porque não foi definido nenhum "else" para a condição.
// c) Haverá um erro porque o valor da mensagem não foi definido no mesmo escopo de onde ela está sendo exibida, assim, não há como ela "pegar" esse valor.  


//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//EXERCÍCIO 4

// let idade = Number(prompt("Digite sua idade: "))

// if (idade >= 18) {
//     console.log("Você pode dirigir!")
// } else {
//     console.log("Você não pode dirigir!")
// }



//EXERCÍCIO 5
// const turno = prompt("Digite seu turno de estudo (M - matutino, V - vespertino, N - noturno): ").toLocaleLowerCase()

// if (turno === "m") {
//     console.log("Bom dia!")
// } else if (turno === "v") {
//     console.log("Boa tarde!")
// } else if (turno === "n") {
//     console.log("Boa noite!")
// } else {
//     console.log("Turno não encontrado.")
// }

//EXERCÍCIO 6
// const turno = prompt("Digite seu turno de estudo (M - matutino, V - vespertino, N - noturno): ").toLocaleLowerCase()

// switch(turno){
//     case "m":
//         console.log("Bom dia!")
//         break
//     case "v":
//         console.log("Boa tarde!")
//         break
//     case "n":
//         console.log("Boa noite!")
//         break
//     default: 
//         console.log("Turno não encontrado.")
// }

//EXERCÍCIO 7
// const generoFilme = prompt("Qual gênero de filme você vai assistir?")

// const precoIngresso = prompt("Qual o valor do ingresso do filme? (Digite apenas números)")

// if(generoFilme === "fantasia" && precoIngresso < 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme! :(")
// }


//DESAFIO 1
// const generoFilme = prompt("Qual gênero de filme você vai assistir?")

// const precoIngresso = prompt("Qual o valor do ingresso do filme? (Digite apenas números)")

// if(generoFilme === "fantasia" && precoIngresso < 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme! :(")
// }

//DESAFIO 2

// const nome = prompt("Digite seu nome: ")
// const tipoJogo = prompt("Digite o tipo de jogo (IN para internacional e DO para doméstico)")
// const etapaJogo = prompt("Digite a etapa do jogo (SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final)")
// const categoria = prompt("Digite a categoria (1, 2, 3 ou 4)")
// const quantidade = Number(prompt("Digite a quantidade de ingressos desejada: "))
// let valorIngresso = ""
// let totalValor = " "

// if(tipoJogo === "do") {
//     if (etapaJogo === "sf" && categoria === 1) {
//         valorIngresso === 1320
//     } else if (etapaJogo === "sf" && categoria === 2) {
//         valorIngresso === 880
//     } else if (etapaJogo === "sf" && categoria === 3) {
//         valorIngresso === 550
//     } else if (etapaJogo === "sf" && categoria === 4) {
//         valorIngresso === 220

//     } else if (etapaJogo === "dt" && categoria === 1) {
//         valorIngresso === 660
//     } else if (etapaJogo === "dt" && categoria === 2) {
//         valorIngresso === 440
//     } else if (etapaJogo === "dt" && categoria === 3) {
//         valorIngresso === 330
//     } else if (etapaJogo === "dt" && categoria === 4) {
//         valorIngresso === 170

//     } else if (etapaJogo === "fi" && categoria === 1) {
//             valorIngresso === 1980
//     } else if (etapaJogo === "fi" && categoria === 2) {
//         valorIngresso === 1320
//     } else if (etapaJogo === "fi" && categoria === 3) {
//         valorIngresso === 880
//     } else if (etapaJogo === "fi" && categoria === 4) {
//         valorIngresso === 330
//     }
    
//     console.log("---Dados da compra---")
//     console.log("Nome do cliente: ", nome)
//     if(tipoJogo ==="do") {
//         console.log("Tipo de jogo: Nacional")
//     } else if(tipoJogo ==="in") {
//         console.log("Tipo de jogo: Internacional")
//     }
//     if (etapaJogo ==="sf") {
//         console.log("Etapa do jogo: Semifinal")
//     } else if (etapaJogo ==="dr"){
//         console.log("Etapa do jogo: Decisão do 3° lugar")
//     } else if (etapaJogo ==="fi") {
//         console.log("Etapa do jogo: Final")
//     }

//     console.log("Categoria: ", categoria)
//     console.log("Quantidade de ingressos: ", quantidade)
//     console.log("---Valores---")
//     console.log("Valor do ingresso: R$", valorIngresso)
//     //totalValor = (valorIngresso * 1 * quantidade)
//     console.log("Valor total: R$", valorIngresso*quantidade)
// }