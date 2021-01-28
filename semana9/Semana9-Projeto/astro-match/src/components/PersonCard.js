import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 80%;
    width: 60%;
    box-shadow: grey 1px 1px 5px;
    width: 80%;
    padding: 12px;
    margin: 40px;

 img {
    width: 20vw;
    height: 40vh;
} 
`

const Profile = styled.div`
    display: flex;
`
const IsMatch = styled.div`
    display: flex;
`
const Button = styled.button`
    height: 50px;
    width: 70px;
`
const Photo = styled.image`
    /* max-height: 20px;
    max-width: 20px; */
    /* width: 50%; */
    /* height: 50%; */
    /* box-shadow: grey 4px;
    margin-bottom: 4px;
    border-radius: 4px;
    object-fit: cover;
    box-sizing: content-box; */
`


function PersonCard() {
    const [profile, setProfile] = useState({})
    // const [userChoice, setUserChoice] = useState(null)

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

    const choosePerson = (id) => {
        const body = {
            id: profile.id,
            choice: id,
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

    const resetProfiles = () => {
        axios
          .put(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriela/clear"
          )
          .then((response) => {
              alert("Lista de matches limpa!")
            getProfile();
          })
          .catch((error) => {
            console.log(error);
          });
      };


    return(
        <Container>
            <Button onClick={() => resetProfiles(profile.id)}>Resetar matches</Button>
            {profile &&
            <Profile>
                <Photo><img src={profile.photo} /></Photo>
                <h3>{profile.name}, {profile.age}</h3>
                <h5>{profile.bio}</h5>
            </Profile>
        }

            <IsMatch>
                <Button onClick={() => choosePerson(profile.id, false)}>X</Button>
                <Button onClick={() => choosePerson(profile.id, true)}>♥</Button>
                
            </IsMatch>

        </Container>
    )

}

  export default PersonCard