import React, { useState } from 'react'
import {InputsContainer, LogoImage, ScreenContainer, SignUpButtonContainer} from './styled'
import useForm from '../../hooks/useForm'
import monkey from '../../assets/monkey.png'
import { Button, TextField } from '@material-ui/core'
import {login} from '../../services/user'
import { useHistory } from 'react-router-dom'

const LoginForm = () => {

  const [form, onChange, clear] = useForm({email: "", password:""})
  const history = useHistory()

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clear, history)
  }

 

  return (
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField 
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField 
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />

          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
            margin={"normal"}
          >
            Login
          </Button>
        </form>
      </InputsContainer>
  )
}

export default LoginForm