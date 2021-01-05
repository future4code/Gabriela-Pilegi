import React from 'react';
import styled from 'styled-components'; 

export const Container = styled.div`
width: 50w;
height: 50vh;
`;
export class Etapa1 extends React.Component {
    render(){
        return (
            <div className="container1">
                <form>
                    <h1>ETAPA 1 - DADOS GERAIS</h1>
                    <p>1. Qual o seu nome?</p>
                    <input></input>
                    <p>2. Qual sua idade?</p>
                    <input></input>
                    <p>3. Qual seu e-mail?</p>
                    <input></input>
                    <p>4. Qual a sua escolaridade?</p>
                    <select>
                        <option>Ensino médio incompleto</option>
                        <option>Ensino médio completo</option>
                        <option>Ensino superior incompleto</option>
                        <option>Ensino superior completo</option>
                    </select>
                </form>
            </div>
        )

    }
}



export default Etapa1;