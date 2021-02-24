import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { InputsContainer, SignUpFormContainer } from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { signUp } from '../../services/user'


const SignUpForm = ({setRightButtonText}) => {
  const history = useHistory()
  const [form, onChange, clear] = useForm({username: "", email: "", password: ""})
  

  const onSubmitForm = (event) => {
    event.preventDefault()
    signUp(form, clear, history, setRightButtonText)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <SignUpFormContainer>
        <InputsContainer>
          <TextField
            value={form.name}
            name={"username"}
            onChange={onChange}
            label={"Nome"}
            variant={"outlined"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
          />
          <TextField
            value={form.email}
            name={"email"}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            type={"email"}
            fullWidth
            required
            margin={"normal"}
          />
          <TextField
            value={form.password}
            name={"password"}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            type={"password"}
            fullWidth
            required
            margin={"normal"}
          />
        </InputsContainer>
        <Button
          color={"primary"}
          variant={"contained"}
          type={"submit"}
          fullWidth
        >
          Cadastro
        </Button>
      </SignUpFormContainer>
    </form>
  )
}

export default SignUpForm
