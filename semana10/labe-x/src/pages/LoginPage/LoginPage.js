import React from 'react'
import { useHistory } from 'react-router-dom';
import {goToAdministratorPage} from "../../routes/Coordinator"


const LoginPage = () => {
    const history = useHistory()
    
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={() => goToAdministratorPage(history)}>Ir para página do administrador</button>
            
        </div>
    )
}

export default LoginPage;