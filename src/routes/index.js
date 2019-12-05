import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../pages/home'
import Repos from '../pages/repos'
import Starred from '../pages/starred'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/:username">
        <Home />
      </Route>

      <Route exact path="/:username/repos">
        <Repos />
      </Route>

      <Route exact path="/:username/starred">
        <Starred />
      </Route>

      <Redirect from="*" exact to="/" />
    </Switch>
  )
}
