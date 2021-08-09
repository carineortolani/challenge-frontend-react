import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from '../pages/Home'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/home">
          <Home />
      </Route>
      <Route path="/profile">
          <Home />
      </Route>
      <Route path="/favorites">
          <Home />
      </Route>
      <Redirect from="*" to="/home" />
    </Switch>
  </BrowserRouter>
)

export default Routes
