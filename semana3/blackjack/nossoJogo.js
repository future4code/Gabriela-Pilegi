/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


console.log("Bem-vinde ao jogo Blackjack!")


if(confirm("Quer iniciar uma nova rodada?")) {

   let pontuacaoComputador = 0
   let pontuacaoUsuario = 0
    
   const primeiraCartaComputador = comprarCarta()
   const segundaCartaComputador = comprarCarta()
   const primeiraCartaUsuario = comprarCarta()
   const segundaCartaUsuario = comprarCarta()

   pontuacaoComputador = (primeiraCartaComputador.valor + segundaCartaComputador.valor)
   pontuacaoUsuario = (primeiraCartaUsuario.valor + segundaCartaUsuario.valor)
   console.log("Usuário - cartas: ", primeiraCartaUsuario.texto, segundaCartaUsuario.texto)
   console.log("Computador - cartas: ", primeiraCartaComputador.texto, segundaCartaComputador.texto)
   if (pontuacaoComputador > pontuacaoUsuario) {
      console.log("O computador venceu!")
   } else if (pontuacaoUsuario > pontuacaoComputador) {
      console.log("O usuário venceu!")
   } else {
      console.log("Empate!")
   }

} else {
   console.log("O jogo acabou.")
}

