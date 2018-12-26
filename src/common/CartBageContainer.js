import { connect } from 'react-redux'
import CartBage from './CartBage'
import {cartProductsCount, cartProductsTotalCount} from '../selectors' 

const mapStateToProps = state => ({
  // cartItems: state.cart,
  cartProductsCount: cartProductsCount(state),
  cartProductsTotalCount: cartProductsTotalCount(state)
})

export default connect(
  mapStateToProps
)(CartBage)
