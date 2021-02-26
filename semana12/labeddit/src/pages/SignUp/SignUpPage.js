import React from 'react'
import monkey from '../../assets/monkey.png'
import { ScreenContainer } from './styled'
import SignUpForm from './SignUpForm'
import { LogoImage } from './styled'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const SignUpPage = ({setRightButtonText}) => {
  useUnprotectedPage()

  return (
    <ScreenContainer>
      <LogoImage src={monkey}/>
      <SignUpForm setRightButtonText={setRightButtonText}/>
    </ScreenContainer>
  )
}

export default SignUpPage
