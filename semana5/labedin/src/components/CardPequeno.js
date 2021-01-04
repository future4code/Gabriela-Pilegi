import React from 'react';
import './CardPequeno.css'

export function CardPequeno(props) {
    return (
        <div className="cardPequeno-container">
            <img src={ props.imagem } />
            <h5>{ props.titulo }</h5>
            <p>{ props.texto }</p>
            
        </div>
    )
}

