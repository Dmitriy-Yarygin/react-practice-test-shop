import React, { Component } from 'react'
import './ProductList.css'
import { connect } from 'react-redux'
import { allProducts } from '../../selectors'
import {
  addProducts,
  clearStore,
  fetchProducts
} from '../../ducks/products/actions'
import ProductCard from './ProductCard'
import Button from '@material-ui/core/Button'

class ProductList extends Component {
  state = { products: [], page: 1, limit: 3 }

  componentDidMount () {
    const data = { page: this.state.page, limit: this.state.limit }
    this.props.load(data)
  }

  showMore = () => {
    const data = { page: this.state.page + 1, limit: this.state.limit }
    this.props.load(data)
    this.setState({ page: data.page })
  }

  componentWillUnmount () {
    this.props.clsStore()
  }

  render () {
    const products = this.props.items;
    const isLast = (products.length>(15-this.state.limit));
    return (
      <>
        <ul className='products'>
          {products.map(item => {
            // const productPage = `/user/:${item.id}`
            return <ProductCard key={item.id} item={item}/>
          })}
        </ul>
        <div>
          <Button variant='contained' color='primary' disabled={isLast} fullWidth onClick={this.showMore}>
            Show more ...
          </Button>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  items: allProducts(state)
})
const mapDispatchToProps = dispatch => ({
  addToStore: data => dispatch(addProducts(data)),
  clsStore: data => dispatch(clearStore(data)),

  load: data => dispatch(fetchProducts(data))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList)
