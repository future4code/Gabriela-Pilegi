// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final'
import styled from 'styled-components'

const BtnProximaEtapa = styled.button`
  margin: auto;
  padding: 4px;
  margin-top: 16px;
  width: 100px;
`;

const ContainerApp = styled.div`
  height: 100vh;
  text-align: center;  
`

class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch(this.state.etapa) {
      case 1:
        return <Etapa1></Etapa1>
      case 2: 
        return <Etapa2></Etapa2>
      case 3: 
        return <Etapa3></Etapa3>
      case 4:
        return <Final></Final>
      default:
        break;
    }
  }

  avancarEtapa = () => {
    if(this.state.etapa) {
      this.setState({ etapa: this.state.etapa +1 })
    }
  }
  render() {
    const etapaFinal = this.state.etapa === 4 ? ("") : ( <BtnProximaEtapa onClick={this.avancarEtapa}>
      Próxima etapa 
      </BtnProximaEtapa>)
    
    return (
     <ContainerApp>
       {this.renderizaEtapa()}
       { etapaFinal }
    </ContainerApp>
    );
  }
}
  
  export default App;