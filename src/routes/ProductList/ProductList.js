import React, { Component } from 'react'
import './ProductList.css'
import ProductCard from './ProductCard'
import Button from '@material-ui/core/Button'

const productsQantity = 15

export default class ProductList extends Component {
  state = { products: [], start: 0, limit: 3 }

  componentDidMount () {
    const start = this.props.start
    const limit = this.props.limit
    if (start && limit) {
      this.setState({ start, limit })
    } else {
      this.props.fetchProducts(this.state.start, this.state.limit)
    }
  }

  showMore = () => {
    const start = this.state.start + this.state.limit
    this.props.fetchProducts(start, this.state.limit)
    this.setState({ start })
    // this.props.saveStart(5555);
  }

  componentWillUnmount () {
    // this.props.clearStore()
    this.props.saveStart(this.state.start)
    this.props.saveLimit(this.state.limit)
  }

  render () {
    const products = this.props.items
    console.log('ProductList render    ', products)
    const isLast = products.length > productsQantity - this.state.limit
    return (
      <>
        <ul className='products'>
          {products.map(item => (
            <ProductCard key={item.id} item={item} />
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
