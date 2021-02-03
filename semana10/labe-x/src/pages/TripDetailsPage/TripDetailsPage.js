import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'


const TripDetailsPage = () => {

    const [trip, setTrip] = useState({})
    const history= useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if (token === null) {
            history.push("/login")
        }
    }, [])
    
   
   const getTripDetail = () => {
        axios.get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriela-pilegi-epps/trip/${trip.id}`,
            {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((response) => {
            setTrip(response.data.trip)
        })
        .catch((error) => {
            console.log(error)
        })      
    }

 
    

    return (
        <div>
            <h1>Trip Details Page</h1>
            <h2>{trip.name}</h2>
            <p>{trip.description}</p>
        </div>
    )
}

export default TripDetailsPage;