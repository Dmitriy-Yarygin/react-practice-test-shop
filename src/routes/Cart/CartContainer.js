import { connect } from 'react-redux'
import Cart from './Cart'
import { delProductFromCart, editQantityInCart } from '../../ducks/cart/actions'
import {cartProductsCount, cartProductsTotalCount} from '../../selectors' 

const mapStateToProps = state => ({
    cartItems: state.cart,
    cartProductsCount: cartProductsCount(state),
    cartProductsTotalCount: cartProductsTotalCount(state)
})

const mapDispatchToProps = dispatch => ({
  delProductFromCart: (id) => dispatch(delProductFromCart(id)),
  editQantityInCart: (id, count) => dispatch(editQantityInCart(id, count)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
