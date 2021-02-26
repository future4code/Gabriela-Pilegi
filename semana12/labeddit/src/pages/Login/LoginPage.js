import React, { useState } from "react"
import {
  InputsContainer,
  LogoImage,
  ScreenContainer,
  SignUpButtonContainer,
} from "./styled"
import { goToFeed, goToRegister, goToSignUp } from "../../routes/coordinator"
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm"
import monkey from "../../assets/monkey.png"
import { Button, TextField } from "@material-ui/core"
import LoginForm from "./LoginForm"
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = ({setRightButtonText}) => {
  const history = useHistory();
  useUnprotectedPage()
  return (
    <ScreenContainer>
      <LogoImage src={monkey} />
      <LoginForm  setRightButtonText={setRightButtonText}/>
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignUp(history)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
          margin={"normal"}
        >
          Cadastre-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
