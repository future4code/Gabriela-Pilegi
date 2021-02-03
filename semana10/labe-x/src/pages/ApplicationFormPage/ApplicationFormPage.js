import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const ApplicationForm = styled.div`
    display: flex;
    flex-direction: column;
`


const ApplicationFormPage = () => {

    const [form, setForm] = useState({
        name:"",
        age: "",
        applicationText: "",
        profession: "",
        country: ""
    })

    const [trips, setTrips] = useState(
        []
    )

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setForm({...form, [name]: value })
    }

    useEffect(() => {
        axios.get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriela-pilegi-epps/trips"
            )
            .then((response) => {
                setTrips(response.data.trips)

            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const getTrips = trips.map((trip) => {
        return (
            <option value={trip.id} key={trip.id}>
                <p>{trip.name} - {trip.planet}</p>
                <p>{trip.description}</p>
            </option>
        )
    })
    return (
        <ApplicationForm>
            <h1>Application Form Page</h1>
            <form>
                <label>Nome: </label>
                <input 
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Digite seu nome"
                />
                <label>Idade: </label>
                <input 
                    name="age"
                    value={form.age}
                    onChange={handleInputChange}
                    type="number"
                    placeholder="Digite sua idade"
                />
                <label>Profissão: </label>
                <input 
                    name="profession"
                    value={form.profession}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Digite sua profissão"
                />
                <label>País </label>
                <input 
                    name="country"
                    value={form.country}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Digite seu país"
                />

                <label>Destino: </label>
                <select 
                    name="tripId"
                    value={form.tripId}
                    onChange={handleInputChange}
                >
                <option value="">Escolha um destino</option>
                {getTrips}
                </select>
                <label>Mensagem: </label>
                <input 
                    name="applicationTExt"
                    value={form.applicationText}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Por que você quer ir?"
                />

                <button>Inscrever-me</button>
            </form>
        </ApplicationForm>
    )
}

export default  ApplicationFormPage;