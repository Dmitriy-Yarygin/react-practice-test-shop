import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import ProductList from './ProductList/ProductList'


class Home extends Component {

  render () {

    return (
      <div className="home">
        <ProductList  />
      </div>
    )
  }
}
export default Home

