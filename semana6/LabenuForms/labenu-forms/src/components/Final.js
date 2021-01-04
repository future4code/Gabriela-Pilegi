import React from 'react'
import styled from 'styled-components'; 

export const Container = styled.div`
width: 50w;
height: 50vh;
`;


export class Final extends React.Component{
    render(){
        return(
            <div className="containerFinal">
                <h1>O FORMULÁRIO ACABOU</h1>
                <p>Muito obrigada por participar! Entraremos em contato!</p>
            </div>
        )
    }
}

export default Final;