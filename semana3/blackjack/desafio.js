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
console.log("Bem-vind@ ao jogo Blackjack!")
let pontuacaoUsuario = 0
let pontuacaoComputador = 0

let cartaUsuario = []
let cartaComputador = []

if(confirm("Quer iniciar uma nova rodada?")) {
   cartaUsuario.push(comprarCarta(), comprarCarta())
   cartaComputador.push(comprarCarta(), comprarCarta())

   while (cartaUsuario[0] === 11 && cartaUsuario[1] === 11) {
      cartaUsuario[0] = comprarCarta()
      cartaUsuario[1] = comprarCarta()
   }

   while (cartaComputador[0] === 11 && cartaComputador[1] === 11) {
      cartaComputador[0] = comprarCarta()
      cartaComputador[1] = comprarCarta()
   }

   pontuacaoUsuario = cartaUsuario[0].valor + cartaUsuario[1].valor
   pontuacaoComputador = cartaComputador[0].valor + cartaComputador[1].valor
   console.log("Suas cartas são:", cartaUsuario[0].texto, cartaUsuario[1].texto + ".", "A carta revelada do computador é:", cartaComputador[0].texto + ".", )

   if (confirm("Deseja comprar uma nova carta?")) {
      if(pontuacaoUsuario < 21 && pontuacaoComputador < 21)
      cartaUsuario[] = comprarCarta()
      console.log(cartaUsuario[2].texto)
   } else {
      console.log("Fim de jogo!")
   }


   // if (pontuacaoUsuario < 21 && pontuacaoComputador < 21) {
   //    if (confirm ("Deseja comprar mais uma carta?")) {
         
   //       cartaUsuario.push(comprarCarta())
   //    } else {
   //       while (pontuacaoUsuario > pontuacaoComputador) {
   //          cartaComputador.push(comprarCarta())
   //       }
   //    }
   // }

  
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
