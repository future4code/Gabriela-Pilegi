// Exercício 1 
// a) Como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// Através do process.argv, seguido do índice do elemento que queremos exibir.

// b)
// const idade = Number(process.argv[3])
// console.log(`Olá, ${process.argv[2]}! Você tem ${idade} anos.`)

// c)
// const idade = Number(process.argv[3])
// const novaIdade = idade+7
// console.log(`Olá, ${process.argv[2]}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade} anos.`)

// Exercício 2
// const num1 = Number(process.argv[2])
// const num2 = Number(process.argv[3])
// const operacao = process.argv[4]

// switch(operacao) {
//   case "add":
//     console.log(num1 + num2)
//     break;
//   case "sub":
//     console.log(num1 - num2)
//     break;
//   case "mult":
//     console.log(num1 * num2)
//     break;
//   case "div":
//     console.log(num1 / num2)
//     break;
//   default:
//     console.log("Erro.")
// }

// Exercício 3

// const listaDeTarefas = [ 
//   "Tarefa 1",
//   "Tarefa 2",
//   "Tarefa 3",
// ]

// const novaLista = listaDeTarefas.push(process.argv[2])
// console.log(listaDeTarefas)
