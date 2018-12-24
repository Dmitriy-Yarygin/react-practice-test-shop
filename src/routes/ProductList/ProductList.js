import React, { Component } from 'react'
import './ProductList.css'
import ProductCard from './ProductCard'
import Button from '@material-ui/core/Button'

export default class ProductList extends Component {
  state = { limit: 3 }

  componentDidMount () {
    if (this.props.items.length === 0) {
      this.showMore();
    }
  }

  showMore = () => {
    this.props.fetchProducts(this.props.start, this.state.limit);
  }

  render () {
    const products = this.props.items
    const isLast = products.length >= this.props.end 
    return (
      <>
        <ul className='products'>
          {products.map(item => (
            <ProductCard key={item.id} item={item} addProductToCart={this.props.addProductToCart}/>
          ))}
        </ul>
        <div>
          <Button
            variant='contained'
            color='primary'
            disabled={isLast}
            fullWidth
            onClick={this.showMore}
          >
            Show more ...
          </Button>
        </div>
      </>
    )
  }
}
