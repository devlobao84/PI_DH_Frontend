import React from 'react'
import './App.css'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import index from '../src/Pages/Index/Index'
import login from '../src/Pages/Login/Login'
import dashboard from '../src/Pages/Dashboard/Dashboard'
import calendar from '../src/Pages/Calendar/Calendar'
import comfirmedService from '../src/Pages/ConfirmedService/ConfirmedService'
import notification from '../src/Pages/Notification/Notification'
import NotFound from '../src/Pages/NotFound/NotFound'
import Modal from 'react-modal'
import PrivateRoute from './PrivateRouter'

Modal.setAppElement('#root')

export default function app() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={index} />
        <Route exact path="/login" component={login} />
        <PrivateRoute>
          <Route exact path="/login/dashboard" component={dashboard} />
          <Route exact path="/login/dashboard/calendar" component={calendar} />
          <Route exact path="/login/dashboard/confirmed" component={comfirmedService} />
          <Route exact path="/login/dashboard/notification" component={notification} />
        </PrivateRoute>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
