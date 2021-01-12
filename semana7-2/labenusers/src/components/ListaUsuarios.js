import React from 'react'
import axios from 'axios'
import userEvent from '@testing-library/user-event'

class ListaUsuarios extends React.Component{
    state = {
        usuarios: [],
    }

    componentDidMount = () => {
        this.listarUsuarios()
    }


    listarUsuarios = () =>
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
        headers: {
            Authorization: 'gabriela-pilegi-epps'
        }
    }).then((response) => {
        this.setState({ usuarios: response.data })
    }).catch((error) => {
        alert("Erro.")
        console.log(error.message)
    })

    render() {
        const exibirListaUsuarios = this.state.usuarios.map((usuario) => {
            return(
                <p key={usuario.id}>
                    {usuario.name}
                </p>
            )
        })
        return (
            <div>
                <h1>Lista de usuários cadastrados</h1>
                {exibirListaUsuarios}
            </div>
        )
    }
}
export default ListaUsuarios;