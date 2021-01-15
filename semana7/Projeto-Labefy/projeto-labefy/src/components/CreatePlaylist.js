import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import GetAllPlaylists from './GetAllPlaylists'

const ContainerCreatePlaylist = styled.div`
    display: flex;
`
const InputValuePlaylist = styled.input`
    width: 200px;
    height: 16px;
`

const ButtonCreatePlaylist = styled.button`
    width: 80px;
    height: 40px;
`


class CreatePlaylist extends React.Component {
    state = {
        inputPlaylist: '',
    }

    onChangeCreatePlaylist = (event) => {
        this.setState({ inputPlaylist: event.target.value })
    }

    createPlaylist = () => {
        const body = {
            name: this.state.inputPlaylist
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
            headers: {
                Authorization: 'gabriela-pilegi-epps'
            }
        }).then((response) => {
            console.log(response.data)
            if (this.state.inputPlaylist =! this.state.playlists) {
                alert(`Playlist ${this.state.inputPlaylist} criada com sucesso!`)
                this.setState ({ inputPlaylist: '' })
    
            }
            
        }).catch((error) => {
            console.log(error.message)
            alert("Erro ao criar playlist.")
        })
    }

    render () {
        return(
            <ContainerCreatePlaylist>
                <h2>Criar Playlist</h2>
                <label>Nome: </label>
                <InputValuePlaylist 
                    type="text" 
                    value = { this.state.inputPlaylist }
                    onChange={this.onChangeCreatePlaylist}
                />
                <ButtonCreatePlaylist onClick={ this.createPlaylist}>Criar playlist</ButtonCreatePlaylist>
                <GetAllPlaylists></GetAllPlaylists>

            </ContainerCreatePlaylist>
        )
    }
}

export default CreatePlaylist;