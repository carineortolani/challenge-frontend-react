import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from '../pages/Home'
import Profile from '../pages/Profile'
import TeamFavorite from '../pages/Favorites'

import Header from '../layout/Header'
import Footer from '../layout/Footer'

const Routes = () => (
  <BrowserRouter>
    <Header />

    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route exact path="/favorites" component={TeamFavorite} />

      <Redirect from="*" to="/home" />
    </Switch>

    <Footer />
  </BrowserRouter>
)

export default Routes
