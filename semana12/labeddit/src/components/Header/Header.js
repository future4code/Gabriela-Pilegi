import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { StyledToolbar } from './styled';
import { goToFeed, goToLogin } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';



const Header = () => {
  const history = useHistory()
  const token = localStorage.getItem("token")
  const[rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

  const logout = () => {
    localStorage.removeItem("token")
  }

  const rightButtonAction = () => {
    if (token) {
      logout()
      setRightButtonText("Login")
      goToLogin(history)
    } else {
      goToLogin(history)
    }
  }
  
  
  return (
  
      <AppBar position="static">
        <StyledToolbar>
          <Typography variant="h6">
          <Button onClick={() => goToFeed(history)} color="inherit">LabEddit</Button>
          </Typography>
          <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
  )
}

export default Header