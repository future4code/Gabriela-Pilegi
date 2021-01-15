import React from 'react'
import styled from 'styled-components'
// import CreatePlaylist  from './components/CreatePlaylist'
import GetAllPlaylists from './components/GetAllPlaylists'
// import GetPlaylistTracks from './components/GetPlaylistTracks'
// import AddTrackToPlaylist from './components/AddTrackToPlaylist'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

function App() {
  return (
    <Container>
      <h1>Labefy</h1>
      {/* <CreatePlaylist></CreatePlaylist> */}
      <GetAllPlaylists></GetAllPlaylists>
      {/* <GetPlaylistTracks></GetPlaylistTracks> */}
      {/* <AddTrackToPlaylist></AddTrackToPlaylist> */} 
      
    </Container>
  );
}

export default App;
