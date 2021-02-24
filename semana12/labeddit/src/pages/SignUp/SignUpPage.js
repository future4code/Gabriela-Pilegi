import React from 'react'
import monkey from '../../assets/monkey.png'
import { ScreenContainer } from './styled'
import SignUpForm from './SignUpForm'
import { LogoImage } from './styled'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const SignUpPage = () => {
  useUnprotectedPage()

  return (
    <ScreenContainer>
      <LogoImage src={monkey}/>
      <SignUpForm />
    </ScreenContainer>
  )
}

export default SignUpPage
