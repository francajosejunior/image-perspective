import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import Home from './Home'

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" render={() => <Home />} />
    </Switch>
  </HashRouter>
)

export default Routes
