let colecaoPosts = []

//criar objeto com as infos do html
const criarPost = () => {
    const titulo = document.getElementById("titulo-post")
    const autor = document.getElementById("autor-post")
    const conteudo = document.getElementById("conteudo-post")
    
    const informacoesPost = {
        titulo: titulo.value,
        autor: autor.value,
        conteudo: conteudo.value
    }   

    colecaoPosts.push(informacoesPost)
    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
    criarNovoPost()

    // Tentei criar uma validação para não ter campo vazio ao postar, mas não consegui - pls help
    // if (titulo.value === "" && autor.value === "" && conteudo.value === "") {
    //     alert("Preencha todos os campos antes de postar!")
    // } else {
    //     criarNovoPost()
    // }

}

const criarNovoPost = () => {
    const container = document.getElementById("container-de-posts")
    container.innerHTML = ""
    for (post of colecaoPosts) {
        container.innerHTML += estruturaPost(post)
    }
}

const estruturaPost = (dadosDoPost) => {
    return "<section>" +
    "<h2>" + dadosDoPost.titulo + "</h2>" +
    "<h4>" + dadosDoPost.autor + "</h4>" +
    "<p>" + dadosDoPost.conteudo + "</p>" +
    "</section>"


}