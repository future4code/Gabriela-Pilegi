import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage'
import HomePage from '../pages/HomePage/HomePage'
import ListTripsPage from '../pages/ListTripsPage/ListTripsPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage/TripDetailsPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import ApplicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage'
import AdministratorHomePage from '../pages/AdministratorHomePage/AdministratorHomePage'


export default function Router() {
    return(
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <HomePage />
                </Route>
                
                <Route exact path="/application-form">
                    <ApplicationFormPage />
                </Route>

                <Route exact path={"/login"}>
                    <LoginPage/>
                </Route>

                <Route exact path={"/administrator"}>
                    <AdministratorHomePage />
                </Route>

                <Route exact path={"/trips/list"}>
                    <ListTripsPage />
                </Route>

                <Route exact path={"/trips/create"}>
                    <CreateTripPage />
                </Route>

                <Route exact path={"/trips/details"}>
                    <TripDetailsPage />
                </Route>

               

                <Route>
                    <ErrorPage />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}