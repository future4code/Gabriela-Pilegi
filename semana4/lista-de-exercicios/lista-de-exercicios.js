// Exercícios de interpretação de código
// Exercício 1
// O que faz: Função para conversão de dólar em real após o usuário digitar o valor da cotação no dia.
// Como faz: Cria uma função chamada conversorDeMoeda com o parâmetro valorEmDolar. Dentro da função, é definido um prompt a partir da variável cotacao para que o usuário informe o valor da cotação do dólar naquele momento. Em seguida, ainda dentro da função, é retornado o parâmetro valorEmDolar multiplicado pela cotação digitada pelo usuário. Após concluir a função, é definida a variável meuDinheiro, com a função tendo valor 100 como parâmetro e, por fim, é impresso no console o resultado obtido da multiplicação de 100 pela cotação
// Valor impresso no console: Se o valor da cotação informado for R$ 5,07, será exibido R$ 507. 

// Exercício 2
// O que faz: Função para cálculo de investimento em diferentes categorias.
// Como faz: É criada a função investeDinheiro com os parâmetros tipoDeInvestimento e valor. Dentro dessa função, é definida uma variável chamada valorAposInvestimento, seguida de uma condicional de switch/case para poupança, renda fixa, CDB e ações, além de um alerta para uma informação que diverge de um desses 4 casos. Dentro de cada case, há a multiplicação do valor pelo tipo de investimento específico. Fora do switch/case, mas ainda dentro da função, é retornada a variável valorAposInvestimento, para posterior impressão no console. Fora da função, é retornado o nome da função por meio das variáveis novoMontante e segundoMontante, que têm, respectivamente, o valor de 1.1 (correspondente ao case ações) multiplicado por 150 (correspondente ao parâmetro valor), e Tipo de investimento incorreto, uma vez que não há case para Tesouro Direto. Os resultados são impressos no console por meio do console.log.
// Valor impresso no console: 165 para a variável novoMontante e Tipo de investimento informado incorreto para o segundoMontante.

// Exercício 3
// O que faz: Programa para exibir a quantidade total de números do array inicial, assim como quantidades e números pares e ímpares em arrays específicas, por meio de loop por for of. 
// Como faz: Há um array na variável numeros e dois arrays vazios nas variáveis array1 e array2. Na execução do programa, a variável numero é atribuída ao array numeros, representando cada um dos elementos contidos nele. Depois, há uma condicional que diz que se o resto da divisão por 2 do numero do array inicial for 0, ou seja, se for número par, este número será exibido no array1. Caso contrário, o número fará parte do array2, destinado a números ímpares. Após concluir o programa, são impressos no console a quantidade total de números do array inicial e as quantidades de números pares e ímpares.
// Valor impresso no console: Quantidade total de números: 14; 6; 8                         

// Exercício 4
// O que faz:
// Como faz: 
// Valor impresso no console:

// Exercícios de Lógica de Programação
// Exercício 1 
// Através de um array, laços de repetição como for ou while. No exemplo abaixo, há uma "lista" com números de 0 a 5 englobada por um array. Assim, ao colocar o console.log para essa lista, seus valores serão exibidos no console. 

// let array = [0, 1, 2, 3, 4, 5]
// console.log(array)

// Exercício 2 
// a) false
// b) false
// c) true
// d) true
// e) true

// Exercício 3
// Não funciona, pois falta definir um valor para a quantidadeDeNumerosPares e colocar o incremento para a variável i. Se isso não for feito, pode ocorrer um loop infinito, já que sem o incremento, o i sempre vai ser menor que a quantidade de números pares.
// const quantidadeDeNumerosPares = 5
// let i = 0
// while (i <= quantidadeDeNumerosPares) {
//   console.log(i*2)
//   i++
// }

// Exercício 4 
// let a = 10
// let b = 10
// let c = 10
// function triangulos() {
//     if (a === b && b === c) {
//       console.log("Triângulo equilátero")
//     } else if (a === b || b === c || a === c) {
//       console.log("Triângulo isósceles")
//     } else {
//       console.log("Triângulo escanelo")
//     }
//   }
//   triangulos()


// Exercício 5
// const num1 = 20
// const num2 = 1
// maior = 0
// diferenca = 0 

// if (num1 > num2) {
//     maior = num1
//     console.log("O maior é: ", num1)
// } else {
//     maior = num2
//     console.log("O maior é: ", num2)
// } 
// if (num1 % num2 === 0) {
//     console.log(num1 + " é divisível por " + num2)
// } else {
//     console.log(num1 + " não é divisível por " + num2)
// }
// if (num2 % num1 === 0) {
//     console.log(num2 +" é divisível por " + num1)
// } else {
//     console.log(num2 +" não é divisível por " + num1)
// }
// diferenca = num1 - num2
// if (diferenca < 0) {
//     diferenca = diferenca * -1
// }
// console.log("A diferença entre eles é " + diferenca)


