import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const Container = styled.div`
    display: flex;
`

const Profile = styled.div`
    display: flex;
`
const IsMatch = styled.div`
    display: flex;
`
// const Button = styled.button`
//     height: 50px;
//     width: 70px;
// `
const Photo = styled.image`
    width: 40vw;
    height: 44vh;
`



function PersonCard() {
    const [profile, setProfile] = useState({})
    const [userChoice, setUserChoice] = useState(null)

    useEffect(() => {
        getProfile()
    },
    [])

    const getProfile = () => {
        axios
            .get
                ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriela/person"
                )
            .then((response) => {
                setProfile(response.data.profile)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const choosePerson = (value) => {
        const body = {
            id: profile.id,
            choice: value,
        }
        axios
            .post
            ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriela/choose-person", 
            body
            )
            .then((response) => {
                getProfile()
                if (response.data.isMatch === true) {
                    alert("Deu match! <3")
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    //RESETAR


    return(
        <Container>
            <div><button>Resetar</button></div>
            
            
            <Profile>
                <Photo><img src={profile.photo} /></Photo>
                <h3>{profile.name}, {profile.age}</h3>
                <h5>{profile.bio}</h5>
            </Profile>

            <IsMatch>
                <Button onClick={() => choosePerson(false)}>X</Button>
                <Button onClick={() => choosePerson(true)}>♥</Button>
            </IsMatch>

        </Container>
    )
    
}

  export default PersonCard