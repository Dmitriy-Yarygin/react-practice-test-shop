import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Product from './Product/ProductContainer'
import NotFound from '../common/Page404'

class Router extends Component {
  render () {
    return (
      <Switch>
        <Route path='/' component={Home} exact />
          <Route path='/product/:userId' component={Product} exact/>
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default Router
