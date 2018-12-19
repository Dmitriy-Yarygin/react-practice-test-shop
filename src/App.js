import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './routes/Layout'
import Router from './routes/Router'

import storeCreator from './store'



const store = storeCreator()

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
