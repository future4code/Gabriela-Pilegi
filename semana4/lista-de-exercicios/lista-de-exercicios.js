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
// O que faz: Progama para mostrar o menor e o maior número do array.
// Como faz: Há um array com números que variam de -10 a 1590. Abaixo, há duas variáveis (numero1 e numero2) que recebem, respectivamente, os valores de infinito e 0. Depois, a condicional for/of atribuiu que, cada elemento do array numeros é um numero, e para cada um desses elementos, faz uma condicional: se o número do array for menor que a variável numero1(que está valendo infinito), esta variável vai receber o valor daquele elemento. O mesmo acontece para o numero2, mas dessa vez o valor deve ser maior que numero2 (que tem valor igual a 0). Assim, numero1 vai receber o menor valor do array e numero2 vai receber o maior valor destes elementos. 
// Valor impresso no console: -10 / 1590

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
// let triangulos = () => {
//     let a = 12
//     let b = 11
//     let c = 10
//     if (a === b && b === c) {
//       console.log("Triângulo equilátero")
//     } else if (a === b || b === c || a === c) {
//       console.log("Triângulo isósceles")
//     } else {
//       console.log("Triângulo escaleno")
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


// Exercícios de funções
// Exercício 1 (###Não funciona###)
// arrayDeNumeros = [1, 3, 5, 7, 9, 11, 13]
//  function segundoMaiorMenor(arrayDeNumeros) {

//     let maiorNumero = -Infinity
//     let segundoMaiorNumero = -Infinity
//     let menorNumero = Infinity
//     let segundoMenorNumero = Infinity
    
//     for (let numero of arrayDeNumeros) {
//         if (numero > maiorNumero) {
//             maiorNumero = numero
//         }

//         if (numero < menorNumero) {
//             menorNumero = numero
//         }
//     }

//     for (let numero of arrayDeNumeros) {
//         if (numero > segundoMenorNumero && numero < maiorNumero) {
//             segundoMaiorNumero = numero
//         } 

//         if (numero < segundoMenorNumero && numero > menorNumero) {
//             segundoMaiorNumero = numero
//         }
//     }

//     console.log("O segundo maior número é", segundoMaiorNumero)
//     console.log("O segundo menor número é", segundoMenorNumero)
// }

// Exercício 2
// const hello = function () {
//     alert("Hello Labenu!")
// }

// hello()

// Exercícios de objetos

// Exercício 1
// Um array é utilizado quando precisamos guardar ou acessar mais de uma informação ao mesmo tempo de forma ordenada. Já os objetos permitem que representemos dados mais complexos dentro de uma mesma variável.

// Exercício 2

// let criaRetangulo = (lado1, lado2) => {
//     return {
//         largura: lado1,
//         altura: lado2,
//         perimetro: 2 * (lado1+lado2),
//         area: lado1 * lado2
//     }
// }
// console.log(criaRetangulo(10, 20))

// Exercício 3
// const filmeFavorito = {
//     titulo: 'Laranja Mecânica',
//     ano: 1971,
//     diretor: 'Stanley Kubrick',
//     atrizesEAtores: ["Malcolm McDowell", " Patrick Magee", " Adrienne Corri", " Miriam Karlin"]
// }

// console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atrizesEAtores}.`)

// Exercício 4
// const pessoa = {
//     nome: "Gabriela",
//     idade: 26,
//     email: "gabriela@gabriela.com",
//     endereço: "Rua 123, número 4"
// }

// const anonimizarPessoa = (pessoa) => {
// 	return {
//         nome: "Anônimo",
//         idade: pessoa.idade,
//         email: pessoa.email,
//         endereço: pessoa.endereço
// 	}
// }

// console.log(anonimizarPessoa(pessoa))

// Exercícios de Funções de array

// Exercício 1
// Letra a
// const pessoas = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// Letra b
// const adultos = pessoas.filter ((pessoa) => {
//     return pessoa.idade >= 20    
// })

// const criancas = pessoas.filter ((pessoa) => {
//     return pessoa.idade < 20

// })

// console.log("Adultos: ", adultos)
// console.log("Crianças e adolescentes: ", criancas)


// Exercício 2
// const array = [1, 2, 3, 4, 5, 6]

// Letra a
// const dobro = array.map((n) => {
//     return 2*n
// })
// console.log(dobro)

// Letra b
// const triplo = array.map((n) => {
//     return String(3*n)
// })
//     console.log(triplo)

//Letra c
// const parOuImpar = array.map((numero) => {
//     if (numero % 2 === 0) {
//         return `${numero} é par`
//     } else {
//         return `${numero} é ímpar`
//     }
// }) 

// console.log(parOuImpar)

// Exercício 3
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// // Letra a
// const podeEntrar = pessoas.filter((pessoa) => {
//    return pessoa.idade >=14 && pessoa.idade <= 60 && pessoa.altura >= 1.5
// })

// //Letra b
// const naoPodeEntrar = pessoas.filter((pessoa) => {
//     return pessoa.idade < 14 || pessoa.idade > 60 || pessoa.altura < 1.5
// })

// console.log(podeEntrar)
// console.log(naoPodeEntrar)

// Exercício 4
// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
//     { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]


// function mensagensPacientes(consultas) {
//     let mensagemEnviada = consultas.map((parametros) => {
//         if(parametros.cancelada === false) {
//             if(parametros.genero === "feminino") {
//                 return `Olá, Sra. ${parametros.nome}. Estamos enviando essa mensagem para lembrá-la da sua consulta no dia  ${parametros.dataDaConsulta}. Por favor acuse o recebimento desse email.`
//             } else {
//                 return `Olá, Sr. ${parametros.nome}. Estamos enviando essa mensagem para lembrá-lo da sua consulta no dia  ${parametros.dataDaConsulta}. Por favor acuse o recebimento desse email.`
//             }
//         } else {
//             if(parametros.genero === "feminino") {
//                 return `Olá, Sra. ${parametros.nome}. Infelizmente, sua consulta marcada para o dia ${parametros.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`
//             } else {
//                 return `Olá, Sr. ${parametros.nome}. Infelizmente, sua consulta marcada para o dia ${parametros.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.`
//             }
//         }
//     })
//         return mensagemEnviada
// }

// console.log(mensagensPacientes(consultas))

// Exercício 5
// const contas = [
// 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
// ]

// contas.forEach((atualizaSaldo) => {

//     for (let i = 0; i < atualizaSaldo.compras.length; i++) {
//         atualizaSaldo.saldoTotal -= atualizaSaldo.compras[i]
//     } 
//  })

//  console.log(contas)