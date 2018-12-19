import React, { Component } from 'react'
import Header from '../common/Header'

class Layout extends Component {
  state = {}
  render () {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default Layout
