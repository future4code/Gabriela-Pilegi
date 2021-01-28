import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const MatchesList = styled.div`

    display: flex;
`

function GetMatches() {
    const [matches, setMatches] = useState([])

  
    const getMatches = () => {
        axios
            .get
                ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriela/matches"
                )
            .then((response) =>{
                console.log(response.data.matches)
                setMatches(response.data.matches)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect (() => {
        getMatches()
    }, [])

    const listMatches = matches.map((match) => {
        return (
            <MatchesList>
                <img src={match.photo} alt="" />
                <p>{match.name}</p>
                
            
            </MatchesList>
        )

    })

    return (listMatches)

   
}

export default GetMatches