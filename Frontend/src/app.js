import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'

//Components
//user focused
import Navbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'
import BookAppointment from './components/BookAppointment'

import NotFound from './components/NotFound'

//pages
import Home from './HomeTheme/Home'
import About from './components/About'
import Doctors from './components/Doctors'
import Dashboard from './components/Dashboard'

import 'bulma'

//import './style.scss'


const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path= '/' component={Home} /> 
      <Route path="/about" component={About} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />

      <Route path="/doctors" component={Doctors} />
      <Route path="/appointment" component={BookAppointment} />


      <Route exact path= '/notfound' component={NotFound} />    

    </Switch>

  </BrowserRouter>
)


ReactDOM.render(
  <App />,
  document.getElementById('root')
)