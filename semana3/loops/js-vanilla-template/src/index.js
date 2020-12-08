
//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//EXERCÍCIO 1
//A variável valor está iniciando no programa valendo 0. Dentro do for, o programa pega a variável i (que está valendo 0) e, enquanto este for menor que 5, faz a variável valor receber ela mesma +1. Depois, o i passa a ter uma unidade adicionada também, com i++. Quando i chega a 4, acontece a soma com 10 e o valor 10 é impresso no console. 

//EXERCÍCIO 2
//a) Serão impressos no console todos os números maiores que 18, ou seja, 19, 21, 23, 25, 27, 30.
//b) Não. Para isso, seria necessário iniciar uma variável i para fazer uma listagem passando por todo os números do array (para fazer isso, daria também para utilizar o lista.lenght para pegar todos os números do array) e só então exibir no console o numero e o índice a que ele corresponde.

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//EXERCÍCIO 3

// EXERCÍCIO A)
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for (let numeros of arrayOriginal) {
//    console.log(numeros)
// }

// EXERCÍCIO B)
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for (let numeros of arrayOriginal) {
//     console.log(numeros/10)
// }

// EXERCÍCIO C)
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// for (let numeros of arrayOriginal) {
//   if (numeros%2 === 0) {
//     console.log(numeros)
//   }
// }

// EXERCÍCIO D) 
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let arrayString = []
// for (let i = 0; i < arrayOriginal.length; i++) {
//     arrayString.push("O elemento do index " + i + " é" + " " + arrayOriginal[i])
//     console.log(arrayString[i])
// }

// EXERCÍCIO E)
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let maiorArray = 0
// let menorArray = 200

// for (let i = 0; i < arrayOriginal.length; i++) {
//     if (maiorArray < arrayOriginal [i]) {
//         (maiorArray = arrayOriginal[i])
//     }
//     if (menorArray > arrayOriginal[i]) {
//         (menorArray = arrayOriginal[i])
//     }
// }

// console.log("O maior número do array é ",maiorArray,"e o menor é ",menorArray)


// DESAFIO 1
// O resultado impresso no console seria:
// 0
// 00
// 000
// 0000

//DESAFIO 2
// console.log("Vamos jogar!")
// let numero = Number(prompt("Digite o número em que está pensando..."))
// //let chute = Number(prompt("Hora de chutar... Tente adivinhar o número que seu amigo está pensando"))
// let chute = Number(prompt("Hora de chutar... Tente adivinhar o número que seu amigo está pensando..."))
// console.log("Vamos jogar!")
// if (chute === numero) {
//     console.log("Parabéns!!! Você acertou!")
// }

// while (chute !== numero) {
//     let chute = Number(prompt("Hora de chutar... Tente adivinhar o número que seu amigo está pensando..."))
//     if (chute > numero) {
//         console.log("O número chutado foi: ", chute)
//         console.log("Errou. O número escolhido é menor.")
//     } else if (chute < numero) {
//         console.log("O número chutado foi: ", chute)
//         console.log("Errou. O número escolhido é maior.")
//     } else { 
//             console.log("Parabéns!!! Você acertou!")
//     }
// } 
