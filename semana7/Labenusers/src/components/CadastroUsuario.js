import React from 'react'
import axios from 'axios'


class CadastroUsuario extends React.Component {
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

    cadastrarUsuario = () => {
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

    render() {
        return (
            <div>
                <div>
                    <h1> Cadastrar usuários</h1>
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
                    <button onClick = {this.cadastrarUsuario}>Salvar</button>
                </div>
            </div>
            
        )
    }
}

export default CadastroUsuario;