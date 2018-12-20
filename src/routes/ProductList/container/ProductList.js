import { connect } from 'react-redux'
import {
  addProducts,
  clearStore,
  fetchProducts,
  saveLimit,
  saveStart
} from '../../../ducks/products/actions'
import ProductList from '../ProductList'

const mapStateToProps = state => ({
  items: state.products.products,
  start: state.products.start,
  limit: state.products.limit
})

const mapDispatchToProps = dispatch => ({
  addProducts: data => dispatch(addProducts(data)),
  clearStore: data => dispatch(clearStore(data)),
  fetchProducts: (page, limit) => dispatch(fetchProducts(page, limit)),
  saveLimit: limit => dispatch(saveLimit(limit)),
  saveStart: start => dispatch(saveStart(start))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList)
