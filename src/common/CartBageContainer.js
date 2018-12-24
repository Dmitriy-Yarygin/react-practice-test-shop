import { connect } from 'react-redux'
import CartBage from './CartBage'

const mapStateToProps = state => ({
  cartItems: state.cart,
})

export default connect(
  mapStateToProps
)(CartBage)
