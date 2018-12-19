import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'


import Home from './Home'
import Product from './Products/Product'
import NotFound from '../common/Page404';


class Router extends Component {

  render () {
    return (
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/:productId' component={Product} />
          <Route component={NotFound} />
        </Switch>
    )
  }
}

export default Router;

/*
          <Route path='/posts' component={Posts} />
          <Route path='/comments' component={Comments} />
          <Route path='/user/:userId' component={User} />

          */