import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { allProducts } from '../../selectors'
import { addProducts, clearStore } from '../../ducks/products/actions'

class ProductList extends Component {
  state = { products: [], page: 1, limit: 5 }

  componentDidMount () {
    this.props.clsStore();
    this.fetchProducts(this.state.page, this.state.limit)
  }

  showMore = () => {
    if (this.state.page * this.state.limit > 30) {
      this.props.clsStore()
      this.setState({ page: 1 })
      return
    }
    this.fetchProducts(this.state.page + 1, this.state.limit)
    this.setState({ page: this.state.page + 1 })
  }

  fetchProducts = (page, limit) => {
    fetch(`http://localhost:3005/products?_page=${page}&_limit=${limit}`)
      .then(response => response.json())
      .then(productsArray => {
        this.props.addToStore({ productsArray })
      })
  }

  render () {
    console.log(this.props)
    const products = this.props.items
    return (
      <>
        <button onClick={this.showMore}> Show more ... </button>
        <ul className='products'>
          {products.map(({ id, name, cost }) => {
            const productPage = `/user/:${id}`
            return (
              <Link key={id} className='products-item' to={productPage}>
                <div>
                  <img src='https://via.placeholder.com/120' alt='avatar' />
                </div>
                <div>
                  <b className='products-item-name'>{name}</b>
                  <span className='products-item-cost'>{cost}</span>
                </div>
              </Link>
            )
          })}
        </ul>
      </>
    )
  }
}

const mapStateToProps = state => ({
  items: allProducts(state)
})
const mapDispatchToProps = dispatch => ({
  addToStore: data => dispatch(addProducts(data)),
  clsStore: data => dispatch(clearStore(data))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList)
