import { connect } from 'react-redux'
import { fetchProducts } from '../../ducks/products/actions'
import { addProductToCart } from '../../ducks/cart/actions'
import ProductList from './ProductList'

const mapStateToProps = state => ({
  items: state.products.products,
  start: state.products.start,
  end: state.products.end,
  error: state.products.error
})

const mapDispatchToProps = dispatch => ({
  fetchProducts: (start, limit) => dispatch(fetchProducts(start, limit)),

  addProductToCart: (product) => dispatch(addProductToCart(product)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList)
