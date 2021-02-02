import React from 'react'
import { useHistory } from 'react-router-dom'
import {goToTripsListPage, goToCreateTripPage, goToTripDetailsPage } from "../../routes/Coordinator"

const AdministratorHomePage = () => {
    const history = useHistory()
    return (
        <div>
            <h3>Lista de viagens</h3>
            <button onClick={() => goToTripsListPage(history)}>Lista de viagens</button>
            <h3>Criar viagem</h3>
            <button onClick={() => goToCreateTripPage(history)}>Criar nova viagem</button>
            <h3>Detalhes da viagem</h3>
            <button onClick={() => goToTripDetailsPage(history)}>Detalhes da viagem</button>
        </div>
    )
}

export default AdministratorHomePage