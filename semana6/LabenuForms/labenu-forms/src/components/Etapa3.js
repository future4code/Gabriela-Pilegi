import React from 'react';
import styled from 'styled-components'; 

export const Container = styled.div`
width: 50w;
height: 50vh;
`;

export class Etapa3 extends React.Component {
    render(){
        return(
            <div className = "container3">
                <form>
                    <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                    <p>5. Por que você não terminou um curso de graduação?</p>
                    <input></input>
                    <p>6. Você fez algum curso complementar?</p>
                    <select>
                        <option>Nenhum</option>
                        <option>Curso técnico</option>
                        <option>Curso de inglês</option>
                    </select>

                </form>
            </div>
        )
    }
}

export default Etapa3;