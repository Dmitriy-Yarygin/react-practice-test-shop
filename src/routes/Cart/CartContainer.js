import { connect } from 'react-redux'
import Cart from './Cart'
import { delProductFromCart, editQantityInCart } from '../../ducks/cart/actions'

const mapStateToProps = state => ({
    cartItems: state.cart,
})

const mapDispatchToProps = dispatch => ({
  delProductFromCart: (id) => dispatch(delProductFromCart(id)),
  editQantityInCart: (id, count) => dispatch(editQantityInCart(id, count)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
