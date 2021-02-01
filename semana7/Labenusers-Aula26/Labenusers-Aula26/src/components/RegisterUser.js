import React from 'react'
import axios from 'axios'
import { axiosConfig, baseUrl } from '../parameters/parameters'


class RegisterUser extends React.Component {
    state = {
        inputName: "",
        inputEmail: "",
    }

    onChangeName = (event) => {
        const valorName = event.target.value
        this.setState({ inputName: valorName })
    }

    onChangeEmail = (event) => {
        const valorEmail = event.target.value
        this.setState({ inputEmail: valorEmail })
    }

    registerUser = () => {
        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        }
        console.log(body)

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
            headers: {
                Authorization: 'gabriela-pilegi-epps'
            }
        }).then((response) => {
            console.log(response.data)
            alert("Usuário cadastrado!")
        }).catch((error) => {
            console.log(error.message)
            alert("Não foi possível cadastrar usuário!")
        })
    }

    // registerUser = async () => {
    //     const body = {
    //         name: this.state.inputName,
    //         email: this.state.inputEmail
    //     }
    //     console.log(body)
    //     try {
    //         const response = await axios.post(baseUrl, axiosConfig)
    //         console.log(response.data)
    //         alert("Usuário cadastrado!")
    //     } catch(error) {
    //         console.log(error.message)
    //         alert("Não foi possível cadastrar usuário!")

    //     }
    // }

    render() {
        return (
            <div>
                <div>
                    <h2> Cadastrar usuários</h2>
                    <label>Nome:</label>
                    <input 
                        type="text"
                        value={this.state.inputName}
                        onChange={this.onChangeName}
                    />
                </div>

                <div>
                    <label>E-mail:</label>
                    <input type="text"
                        value={this.state.inputEmail}
                        onChange={this.onChangeEmail}
                    />
                </div>

                <div>
                    <button onClick = {this.registerUser}>Salvar</button>
                </div>
            </div>
            
        )
    }
}

export default RegisterUser;