/*Exercícios de interpretação de código

1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa. 
    O primeiro console.log vai exibir o número 10 na tela (valor atribuído a B). Já o segundo console.log vai exibir os valores 10 e 5 (valor atribuído à variável A e B, respectivamente, sendo que o segundo foi alterado para 5 durante o procedimento).

2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.
    A=10 e passa a receber o valor de B no final do programa. O B, por sua vez, se inicia em 20, mas recebe o valor de C e fica valendo 10. Por último, C recebe o valor de A, que é 10.  Portanto, console.log vai exibir 3 vezes o número 10. */

//Exercícios de escrita de código

//Primeiro exercício
let nome = ''
let idade = ''

console.log(typeof nome)
console.log(typeof idade)

//Declarando let (variáveis mutáveis), nome e idade aparecem com o tipo string. A string pode receber tanto letras como número, sem especificações. 

nome = prompt ("Qual é seu nome?")
idade = prompt ("Qual é sua idade?")

console.log(typeof nome)
console.log (typeof idade)

//Os tipos de variáveis continuam aparecendo como string. Se deixar as 4 linhas de console.log typeof acima, aparecem 4 vezes o termo string no tipo de variáveis. 

console.log("Olá", nome, "você tem", idade, "anos.") 


//Segundo exercício 
let perguntaAutor = "Qual é o seu autor preferido?"
let respostaAutor = prompt(perguntaAutor)
console.log(perguntaAutor, "Resposta:", respostaAutor)

let perguntaLivro = ("Qual é o seu livro preferido?")
let respostaLivro = prompt(perguntaLivro)
console.log(perguntaLivro, "Resposta:", respostaLivro)

let perguntaEstiloMusical = ("Qual é o seu estilo musical preferido?")
let respostaEstiloMusical = prompt (perguntaEstiloMusical)
console.log(perguntaEstiloMusical, "Resposta:", respostaEstiloMusical)

let perguntaBanda = ("Qual é o sua banda preferida?")
let respostaBanda = prompt (perguntaBanda)
console.log(perguntaBanda, "Resposta:", respostaBanda)

let perguntaMusica =  ("Qual música é a sua cara?")
let respostaMusica = prompt (perguntaMusica)
console.log(perguntaMusica, "Resposta:", respostaMusica)


//Terceiro exercício 
let arrayComidasPreferidas = ["hamburguer", "pizza", "macarrão", "churrasco", "comida japonesa"]
console.log(arrayComidasPreferidas[0], arrayComidasPreferidas[1], arrayComidasPreferidas[2], arrayComidasPreferidas[3], arrayComidasPreferidas[4])

console.log("Essas são minhas comidas prefeirdas: ")
console.log(arrayComidasPreferidas[0])
console.log(arrayComidasPreferidas[1])
console.log(arrayComidasPreferidas[2])
console.log(arrayComidasPreferidas[3])
console.log(arrayComidasPreferidas[4])

arrayComidasPreferidas[1] = prompt ("Qual é sua comida preferida?")
console.log("Essas são minhas novas comidas prefeirdas: ")
console.log(arrayComidasPreferidas[0])
console.log(arrayComidasPreferidas[1])
console.log(arrayComidasPreferidas[2])
console.log(arrayComidasPreferidas[3])
console.log(arrayComidasPreferidas[4])


//Quarto exercício
let perguntasArrayBoolean = ["O céu é azul?", "Cachorros são fofinhos?", "Eu me chamo Maria?"]
let respostasArrayBoolean = [true, true, false]

console.log(perguntasArrayBoolean[0], respostasArrayBoolean[0])
console.log(perguntasArrayBoolean[1], respostasArrayBoolean[1])
console.log(perguntasArrayBoolean[2], respostasArrayBoolean[2])
