import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "Gabriela",
        fotoUsuario: "https://picsum.photos/id/237/200/300",
        fotoPost: "https://picsum.photos/200/300?grayscale"
      },
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/200/300",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "Letícia",
        fotoUsuario: "https://picsum.photos/seed/picsum/200/300",
        fotoPost: "https://picsum.photos/id/870/200/300?grayscale&blur=2"
      },
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

  adicionarPost = () => {

    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const novaPostagem = [...this.state.posts, novoPost]
    this.setState({ posts: novaPostagem })
  }

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value })
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value})
  }

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value})
  }


  render() {
    const listaPosts = this.state.posts.map((item) => {
      return (
        <div key={item.nomeUsuario}>
        <Post>
          nomeUsuario = {item.nomeUsuario} 
          fotoUsuario = {item.fotoUsuario}
          fotoPost = {item.fotoPost}
        </Post>
        </div>
      )
    })


    return (
      <div className={'app-container'}>
      <input
        value = {this.state.valorInputNomeUsuario}
        onChange = {this.onChangeInputNomeUsuario}
        placeholder = {"Nome usuário"}
      />

      <input
        value = {this.state.valorInputFotoUsuario}
        onChange = {this.onChangeInputFotoUsuario}
        placeholder = {"Foto Usuário"}
      />  

      <input
        value = {this.state.valorInputFotoPost}
        onChange = {this.onChangeInputFotoPost}
        placeholder = {"Foto Post"}
      />
          
      {listaPosts}
      <button onClick = { this.adicionarPost }>Novo Post</button>
    </div>
    )
  }

}

export default App;
