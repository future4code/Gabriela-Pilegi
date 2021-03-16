import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
// import {goToAdministratorPage} from "../../routes/Coordinator"


const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const login = () => {
        const body = {
            email: email,
            password: password
        }

        axios.post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriela-pilegi-epps/login",
            body
        )
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            history.push("/administrator")
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            <h1>Login Page</h1>
            {/* <button onClick={() => goToAdministratorPage(history)}>Ir para página do administrador</button> */}
            <input value={email} onChange={handleEmail} placeholder="E-mail" />
            <input
                value={password}
                onChange={handlePassword}
                placeholder="Senha"
                type="password"
            />
            <button onClick={login}>Login</button>
        </div>
    )
}

export default LoginPage;