import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar'
import 'bulma'


const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route>

      </Route>
    </Switch>

  </BrowserRouter>
)


ReactDOM.render(
  <App />,
  document.getElementById('root')
)