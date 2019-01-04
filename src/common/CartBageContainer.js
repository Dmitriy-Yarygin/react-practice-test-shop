import { connect } from 'react-redux'
import CartBage from './CartBage'
import {cartProductsCount, cartProductsTotalCount} from '../selectors' 
import {changeCurrency} from '../ducks/currency/actions'

const mapStateToProps = state => ({
  cartProductsCount: cartProductsCount(state),
  cartProductsTotalCount: cartProductsTotalCount(state),

  currency: state.currency.designation
})


const mapDispatchToProps = dispatch => ({
  changeCurrency: (currency) => dispatch(changeCurrency(currency)),
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(CartBage)
