import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import CreatePlaylist from './CreatePlaylist'


const ContainerPlaylist = styled.li`
    display: flex;
`
const ButtonDeletePlaylist = styled.button`
    width: 12px;
    height: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8px;

`

class GetAllPlaylists extends React.Component {
    state = {
        playlists: [],
        currentPage: "GetAllPlaylists", 
    
    }

    componentDidMount = () => {
        this.getAllPlaylists()
    }

    getAllPlaylists = () => {   
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
                Authorization: 'gabriela-pilegi-epps'
            }
        }).then((response) => {
            console.log(response.data)
            this.setState({ playlists: response.data.result.list})

        }).catch((error) => {
            console.log(error.message)
            alert("Erro ao listar playlists.")
        })
    }

    deletePlayList = (playlistId) => {
        if( window.confirm ("Tem certeza de que deseja deletar?")){
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,{
            headers: {
                authorization: "gabriela-pilegi-epps" }})
            .then((response) => {
                alert("Playlist apagada com sucesso.")
                this.getAllPlaylists()
            })
            .catch((error)=> {
                console.log(error)
                alert("Erro ao apagar playlist.")
            })
        
        }
    }

    goCreatePlaylist = () => {
        if (this.state.currentPage {})
        this.setState({ currentPage: "createPlaylist" })
    }


    render () {
        const refreshPage = () => {
            switch (this.state.currentPage) {
                case "getPlaylists":
                    return <GetAllPlaylists />
                case "createPlaylist":
                    return <CreatePlaylist/>
                default:
                    return <div>Página não encontrada.</div>
            }
        }

        return(
            <div>
                <h2>Listar Playlists</h2>
            
                
                {this.state.playlists.map(playlist => {
                    return(
                        <div>
                            <ContainerPlaylist onClick = {()=> this.getAllPlaylists(playlist.name)}>
                                <p>{playlist.name}</p>
                            <ButtonDeletePlaylist onClick={()=> this.deletePlayList(playlist.id)}>X</ButtonDeletePlaylist>
                            </ContainerPlaylist>
                        </div>
                    )
                })}
                {/* <button onClick={this.goCreatePlaylist}>Criar nova playlist</button> */}
        
                {refreshPage}
            </div>

        )

    }
}

export default GetAllPlaylists;