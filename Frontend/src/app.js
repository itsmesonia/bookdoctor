import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'

//Components
//user focused
import Navbar from './components/Navbar'
import Register from './components/Register'
import Login from './components/Login'
import NotFound from './components/NotFound'

//pages
import Home from './components/Home'
import About from './components/About'
import Doctors from './components/Doctors'
import DoctorCalendar from './components/DoctorCalendar'
import Dashboard from './components/Dashboard'


import 'bulma'
import './style.css'


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
      <Route path="/doctorcalendar" component={DoctorCalendar} />


      <Route exact path= '/notfound' component={NotFound} />    

    </Switch>

  </BrowserRouter>
)


ReactDOM.render(
  <App />,
  document.getElementById('root')
)