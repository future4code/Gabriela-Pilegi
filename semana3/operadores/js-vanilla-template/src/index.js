//Exercícios de interpretação de código
//1
//a. false - bool1 e bool2 são, respectivamente true e false, então o resultado é false
//b. false - bool3 é true (inverso do bool2 - que continua sendo false). Bool 1 é true, resultando em false.
//c. true - o ponto de exclamação "nega" o resultado (que fica sendo true) e o compara (&&) com bool1 ou bool1. Como bool1=true, a última comparação é true. Assim, true + true resulta em true nesse caso.
//e. boolean - os resultados são true ou false. 

//2
//a. undefined - nenhum valor foi definido
//b. null
//c. 11 - há 11 valores declarados no array
//d. 3 - solicita o valor que está na posição 0 do array, que é três
//e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] - i=0=posição do array. Então, ele soma 1 a esse valor, trocando o valor da segunda posição por 19. Dessa forma, exibe todo o array modificando o valor do segundo elemento. 
//f. 9 - o valor atribuído a i é 0, então 0+6=6. O programa vai mostrar o valor presente na posição 6 do array (que é o sétimo número).



//Exercícios de escrita de código
//1 
let idadeUsuario = prompt("Digite sua idade: ")
let idadeAmiga = prompt("Digite a idade da sua melhor amiga: ")

Number(idadeUsuario)
Number(idadeAmiga)

let maiorIdade = (idadeUsuario > idadeAmiga) && true

console.log("Sua idade é maior do que a da sua melhor amiga? ", maiorIdade)

let diferencaIdade = (idadeUsuario - idadeAmiga)

Number(diferencaIdade)

console.log ("A diferença de idade entre você e sua amiga é: ", diferencaIdade)


// //2. 
let numeroPar = prompt("Digite um número par: ")
Number(numeroPar)
console.log("O resto da divisão desse número por 2 é: ", (numeroPar%2))

c. Sempre que um número par for dividido por 2, o resto da divisão será 0.
d. O resto da divisão será 1

//3. 
let listaDeTarefas = [prompt("Digite uma tarefa que você precisa realizar hoje: "), prompt("Digite a segunda tarefa que você precisa realizar hoje: "), prompt("Digite a terceira tarefa que você precisa realizar hoje: ")]

console.log("Estas são as suas tarefas:", listaDeTarefas)

let tarefaConcluida = [prompt ("Digite 0 se você já concluiu a primeira tarefe, 1 se concluiu a segunda e 2 para caso tenha finalizado a terceira tarefa: ")]
listaDeTarefas.splice(tarefaConcluida, 1)

console.log("Ainda falta finalizar as seguintes tarefas: ", listaDeTarefas)


//4
let nomeDoUsuario = prompt("Digite seu nome: ")
let emailDoUsuario = prompt("Digite seu e-mail: ")

console.log("O e-mail ", emailDoUsuario, "foi cadastrado com sucesso. Seja bem-vinda(o), ", nomeDoUsuario)