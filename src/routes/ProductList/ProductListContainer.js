import { connect } from 'react-redux'
import {
  addProducts,
  fetchProducts,
  saveStart
} from '../../ducks/products/actions'
import ProductList from './ProductList'

const mapStateToProps = state => ({
  items: state.products.products,
  start: state.products.start,
  end: state.products.end
})

const mapDispatchToProps = dispatch => ({
  addProducts: data => dispatch(addProducts(data)),
  fetchProducts: (page, limit) => dispatch(fetchProducts(page, limit)),
  saveStart: start => dispatch(saveStart(start))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList)
