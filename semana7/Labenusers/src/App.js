import React from 'react'
import CadastroUsuario from './components/CadastroUsuario'
import ListaUsuario from './components/ListaUsuarios'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

function App() {
  return (
    <div>
      <button>Ir para página de lista</button>
      <Container>
        
        <CadastroUsuario></CadastroUsuario>
        <ListaUsuario></ListaUsuario>
        
      </Container>
    </div>
  );
}

export default App;
