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

    deletarUsuario = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
            headers: {
                Authorization: 'gabriela-pilegi-epps'
            }
        })
          .then((response) => {
              console.log(response)
              alert("Usuário deletado com sucesso!")
              this.listarUsuarios();
          })
          .catch((error) => {
            alert("Erro ao deletar usuário. ")
            console.log(error.message)
          })
      }

    render() {
        return(
            <div>
                <h2>Lista de usuários</h2>
                {this.state.usuarios.map((usuario) => {
                    return(
                        <div>
                            <p>{usuario.name}</p>
                            <button onClick={() => {this.deletarUsuario(usuario.id)}}>X</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ListaUsuarios;