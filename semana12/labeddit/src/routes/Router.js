import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header/Header'
import ErrorPage from '../pages/Error/ErrorPage'
import FeedPage from '../pages/Feed/FeedPage'
import LoginPage from '../pages/Login/LoginPage'
import PostPage from '../pages/Post/PostPage'
import SignUpPage from '../pages/SignUp/SignUpPage'


const Router = ({setRightButtonText}) => {

  return(
    <Switch>
      <Route exact path={"/login"}>
        <LoginPage setRightButtonText={setRightButtonText}/> 
      </Route>

    <Route exact path={"/cadastro"}>
      <SignUpPage setRightButtonText={setRightButtonText}/>
    </Route>

    <Route exact path={"/"}>
      <FeedPage />
    </Route>

    <Route exact path={"/post"}>
      <PostPage />
    </Route>

    <Route>
      <ErrorPage />
    </Route>
  </Switch>


  )
}

export default Router