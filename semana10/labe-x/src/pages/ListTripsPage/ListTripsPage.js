import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'


const ListTripsPage = () => {
    
    const [trips, setTrips] = useState([])
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("token")
        if (token === null) {
            history.push("/login")
        }
    }, [history])

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
    })

    const goToTripDetailsPage = (tripId) => {
        history.push(`/trips/details${tripId}`)
    }

    const getTrips = trips.map((trip) => {
        return(
            <div>
                <li onClick={() => goToTripDetailsPage(trip.id)}>
                    {trip.name}
                </li>
            </div>
        )
    })

    return (
        <div>
            <h1>List Trips Page</h1>
            {getTrips}

        </div>
    )
}

export default ListTripsPage;