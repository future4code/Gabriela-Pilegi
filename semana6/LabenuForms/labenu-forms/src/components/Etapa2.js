import React from 'react';
import styled from 'styled-components'; 

export const Container = styled.div`
width: 50w;
height: 50vh;
`;

class Etapa2 extends React.Component {
    render(){
        return (
            <div className ="container2">
                <form>
                    <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                    <p>5. Qual curso?</p>
                    <input></input>
                    <p>6. Qual a unidade de ensino?</p>
                    <input></input>
                </form>
            </div>
        );
    }
}
export default Etapa2;
