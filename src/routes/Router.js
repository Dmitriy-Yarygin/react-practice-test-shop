import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import NotFound from '../common/Page404'

class Router extends Component {
  render () {
    return (
      <Switch>
        <Route path='/' component={Home} exact />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default Router
