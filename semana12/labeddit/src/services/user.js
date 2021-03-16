import axios from 'axios'
import {BASE_URL} from '../constants/urls'
import { goToFeed } from '../routes/coordinator'

export const login = (body, clear, history, setRightButtonText) => {
  axios.post(`${BASE_URL}/labEddit/login`, body)
  .then((response) => {
    localStorage.setItem("token", response.data.token)
    clear()
    goToFeed(history)
    setRightButtonText("Logout")
  })
  .catch((error) => {
    console.log(error.response.data.message)
    alert(error.response.data.message)
  })
}

export const signUp = (body, clear, history, setRightButtonText) => {
  axios.post(`${BASE_URL}/labEddit/signup`, body)
  .then((response) => {
    localStorage.setItem("token", response.data.token)
    clear()
    goToFeed(history)
    setRightButtonText("Logout")
  })
  .catch((error) => {
    console.log(error.response.data.message)
    alert("Erro.")
  })
} 