import React, { Component } from 'react'
import ProductList from './ProductList/ProductListContainer'

class Home extends Component {
  render () {
    return (
      <div className='home'>
        <ProductList />
      </div>
    )
  }
}
export default Home
