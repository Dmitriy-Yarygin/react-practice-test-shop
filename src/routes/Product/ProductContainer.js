import { connect } from 'react-redux'
import Product from './Product'
import * as actions from '../../ducks/products/actions'
import {choosenProduct} from '../../selectors' //selectors

const mapStateToProps = state => ({
  item: choosenProduct(state),
  items: state.products.products,   // items help to check ability for selector to choose product without fetch
})

const mapDispatchToProps = dispatch => ({
  saveId: (id) => dispatch( actions.saveId(id) ),
  getProductById: (id) => dispatch( actions.getProductById(id) ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)