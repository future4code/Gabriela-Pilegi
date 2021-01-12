import React from 'react'
import axios from 'axios'


class ListaUsuarios extends React.Component{
    state = {
        usuarios: [],
    }

    componentDidMount = () => {
        this.listarUsuarios()
    }


    listarUsuarios = () =>{
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
                Authorization: 'gabriela-pilegi-epps'
            }
        }).then((response) => {
            this.setState({ usuarios: response.data })
        }).catch((error) => {
            alert("Erro.")
            console.log(error.message)
        }  )
    }

    deletarUsuario = (userId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
            headers: {
                Authorization: 'gabriela-pilegi-epps'
            }
        })
          .then(() => {
            alert("Usuário deletado com sucesso!")
            this.listarUsuarios();
          })
          .catch((error) => {
            alert("Erro ao deletar usuário. ")
            console.log(error.message)
          })
      }

    render() {
        const exibirListaUsuarios = this.state.usuarios.map((usuario) => {
            return(
                <div>
                    {usuario.name}
                    <button onClick={() => this.deletarUsuario(usuario)}>X</button>
                </div>
            )
        })
        return (
            <div>
                <h1>Lista de usuários cadastrados</h1>
                <p>{exibirListaUsuarios}</p>
            </div>
        )
    }
}

export default ListaUsuarios;