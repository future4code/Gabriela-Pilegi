import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToApplicationFormPage, goToLoginPage, goToTripsListPage, goToCreateTripPage, goToTripDetailsPage } from "../../routes/Coordinator"


const HomePage = () => {
    const history = useHistory()
    
    return (
        <div>
            <h1>Home Page</h1>
            <h3>Cadastrar-se para uma viagem</h3>
            <button onClick={() => goToApplicationFormPage(history)}>Entrar</button>
            <h3>Fazer login como administrador</h3>
            <button onClick={() => goToLoginPage(history)}>Login</button>

            {/* <h3>Lista de viagens</h3>
            <button onClick={() => goToTripsListPage(history)}>Lista de viagens</button>
            <h3>Criar viagem</h3>
            <button onClick={() => goToCreateTripPage(history)}>Criar nova viagem</button>
            <h3>Detalhes da viagem</h3>
            <button onClick={() => goToTripDetailsPage(history)}>Detalhes da viagem</button>
             */}






        </div>
    )
}

export default HomePage