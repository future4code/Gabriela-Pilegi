import React from 'react'
import RegisterUser from './components/RegisterUser'
import ListaUsuario from './components/ListaUsuarios'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export default class App extends React.Component {
  state = {
    page: true
  };

changePage = () => {
    this.setState({ page: !this.state.page });
  };


  render(){
    return(
      <Container>

        <h1>Labenusers</h1>
        {this.state.page ? <RegisterUser /> : <ListaUsuario />}
        <button button onClick={this.changePage}>Mudar de página</button>
      </Container>
    )
  }
}