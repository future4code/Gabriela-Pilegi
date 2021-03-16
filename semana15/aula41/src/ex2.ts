// Exercício 2
// a) 
// A funç]ao tem como entrada um array de números e retorna um objeto com as estatísticas de maior número, menor número e a média dos números do array.

// function obterEstatisticas(numeros: number[]) {
//     const numerosOrdenados = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas : object = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// const resultado : object = obterEstatisticas([13, 50, 666])
// console.log(resultado)

// b)
// function obterEstatisticas(numeros: number[]) : object {

//     const numerosOrdenados = numeros.sort(
//         (a: number, b: number) : number => a - b
//     )

//     let soma : number = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     type estatisticas = {
//         maior: number,
//         menor: number,
//         media: number
//     }

//     const estatisticas : estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// const resultado : object = obterEstatisticas([13, 50, 666])
// console.log(resultado)

