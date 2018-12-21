import { connect } from 'react-redux'
import {
  addProducts,
  fetchProducts,
  saveStart,
  saveError
} from '../../ducks/products/actions'
import ProductList from './ProductList'

const mapStateToProps = state => ({
  items: state.products.products,
  start: state.products.start,
  end: state.products.end,
  error: state.products.error
})

const mapDispatchToProps = dispatch => ({
  addProducts: data => dispatch(addProducts(data)),
  fetchProducts: (page, limit) => dispatch(fetchProducts(page, limit)),
  saveStart: start => dispatch(saveStart(start)),
  saveError: flag => dispatch(saveError(flag)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList)
