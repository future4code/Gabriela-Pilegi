// Exercício 1 
// a) Como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// Através do process.argv, seguido do índice do elemento que queremos exibir.

// b)
const idade = Number(process.argv[3])
console.log(`Olá, ${process.argv[2]}! Você tem ${idade} anos.`)

// c)
// const idade = Number(process.argv[3])
const novaIdade = idade+7
console.log(`Olá, ${process.argv[2]}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade} anos.`)