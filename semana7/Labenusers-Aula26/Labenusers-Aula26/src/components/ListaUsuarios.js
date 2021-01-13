import React from 'react'
import axios from 'axios'
import { baseUrl, axiosConfig } from '../parameters/parameters'


class ListaUsuarios extends React.Component{
    state = {
        users: [],
    }

    componentDidMount = () => {
        this.listarUsuarios()
    }


    listarUsuarios = async () => {
        try {
            const response = await axios.get(baseUrl, axiosConfig)
            console.log(response.data)
            this.setState({users: response.data})
        } catch(error) {
            console.log(error)
        }
    }

    deletarUsuario = async (id) => {
        try {
            const response = await axios.delete(`${baseUrl}/${id}`, axiosConfig)
            console.log(response)
            this.listarUsuarios()
        } catch(error) {
            console.log(error)
        }
    }

    render() {
        return(
            <div>
                <h2>Lista de usuários</h2>
                {this.state.users.map((usuario) => {
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