import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerActivity = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 24px;
    background-color: #F0F8FF;
`
const ButtonActivity = styled.button`
    width: 8vw;
    padding: 4px;
    background-color: #5F9EA0;
    border-radius: 10px;
`

class GetActivity extends React.Component {
    state = {
        activity: '',
        accessibility: '',
        type: '',
        participants: '',
        price: '',
        link: '',
        key: ''
    };

getActivity = () => {
        axios.get('http://www.boredapi.com/api/activity')
        .then((response) => {
          this.setState({
            activity: response.data.activity,
            accessibility: response.data.accessibility,
            type: response.data.type,
            participants: response.data.participants,
            price: response.data.price,
            link: response.data.link,
            key: response.data.key
          })
        }) 
        .catch((error) => {
          console.log(error)
        })
  }

    render(){
        return(
            <ContainerActivity>
                <h1>Bored API</h1>
                <h2>Lista de atividades</h2>
                <ButtonActivity onClick={this.getActivity}>Escolher atividade</ButtonActivity>
                <p>Atividade: {this.state.activity} </p>
                <p>Acessibilidade: {this.state.activity} </p>
                <p>Tipo: {this.state.type} </p>
                <p>Participantes: {this.state.participants} </p>
                <p>Preço ($): {this.state.price} </p>
                <a href = {this.state.link} target="_blank">Site </a>
                <p>Chave: {this.state.key} </p>
            </ContainerActivity>
        )
    }


}
export default GetActivity;