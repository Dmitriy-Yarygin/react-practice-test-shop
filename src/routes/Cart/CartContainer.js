import { connect } from 'react-redux'
import * as actions from '../../ducks/products/actions'
import Cart from './Cart'

const mapStateToProps = state => ({
  items: state.products.products,
  start: state.products.start,
  end: state.products.end,
  error: state.products.error
})

const mapDispatchToProps = dispatch => ({
  addProducts: data => dispatch(actions.addProducts(data)),
  fetchProducts: (page, limit) => dispatch(actions.fetchProducts(page, limit)),
  saveStart: start => dispatch(actions.saveStart(start)),
  saveError: flag => dispatch(actions.saveError(flag)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
