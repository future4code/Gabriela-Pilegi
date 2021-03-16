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
        
        </ApplicationForm>
    )
}

export default  ApplicationFormPage;