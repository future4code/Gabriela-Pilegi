//Exercícios de interpretação de código
//EXERCÍCIO 1
//a) Vai ser impresso a função minhaFuncao, que multiplica a variável por 5, com as variáveis 2 e 10, imprimindo assim os valores 10 (5*2) e 50 (5*10).
//b) Sem o console.log, nada será impresso no console. Há o return dentro da função que retorna o resultado, mas este não será exibido.


//EXERCÍCIO 2
//a) As saídas impressas no console serão Darvas e Caio, uma vez que será impresso somente a parte do array de índice menor que 2.
//b) Se mudasse o valor do array para ["Amanda", "Caio"], seriam esses os nomes exibidos no console porque estes passariam a ocupar as posições 0 e 1 do array.

//EXERCÍCIO 3
//A função cria um array e inclui uma variável X posteriormente. Caso essa variável seja um número cujo resto da divisão é zero, o arrayFinal recebe aquele valor e o multiplica por ele mesmo (x * x), sendo este o valor de return (mas sem exibi-lo no console). Um nome melhor para a função seria calculaDobroPares, já que a função retorna os valores do dobro de números pares.

//Exercícios de escrita de código
//EXERCÍCIO 4
//a)
// function quemSouEu() {
//     console.log("Eu sou Gabriela")
// }

// function minhaIdade() {
//     console.log("tenho 26 anos")
// }

// function minhaCidade() {
//     console.log("moro em Botucatu")
// }

// function minhaProfissao() {
//     console.log("e sou estudante.")
// }

// quemSouEu(); minhaIdade(); minhaCidade(); minhaProfissao()

//b 
// function quemSouEu() {
//     let nome = prompt("Digite seu nome: ")
//     return nome
// }

// function minhaIdade() {
//     let idade = Number(prompt("Digite sua idade: "))
//     return idade
// }

// function minhaCidade() {
//     let cidade = prompt("Digite sua cidade: ")
//     return cidade
// }

// function estudaOuNao() {
//     let estudante = confirm("Selecione OK se é estudante ou CANCELAR caso contrário")
//     if(estudante) {
//         return "sou estudante"
//     } else {
//         return "não sou estudante"
//     }
// }
// console.log(`Eu sou ${quemSouEu()}, tenho ${minhaIdade()} anos, moro em ${minhaCidade()} e ${estudaOuNao()}`)

//EXERCÍCIO 5
//a)
// let somaDoisNumeros = (num1, num2) => {
//     somaDoisNumeros = num1 + num2
//     return somaDoisNumeros
// }
// console.log(somaDoisNumeros(5, 5))


 //b)
// let maiorOuMenor = (num1, num2) => {
//     if (num1 >= num2 === true)  {
//         console.log("O primeiro número é maior ou igual ao segundo.")
//     } else {
//         console.log("O segundo número é maior que o primeiro.")
//     }
// }

// maiorOuMenor(10, 10)

//c
// function repeteMensagem() {
//     for (let i=0; i<10; i++) {
//         console.log("Hello world!")
//     }
// }

// repeteMensagem()

//EXERCÍCIO 6

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//a
// function indice(array){
//     console.log(array.length)
// }
// indice(array) 

//b
let parOuImpar = (array) => {
    if (array % 2 === 0) {
        return true
    } else {
        return false
    }
}
console.log(parOuImpar(array[6]))

//c
function numerosPares(array) {
    let numeroPar = 0 
    for (let par of array) {
        if (par % 2 === 0) {
            numeroPar++;
        } 
    } 
    return numeroPar
}

console.log(`Há ${numerosPares(array)} números pares.`)


//d 