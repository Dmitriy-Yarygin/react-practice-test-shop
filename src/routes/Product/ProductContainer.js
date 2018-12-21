import { connect } from 'react-redux'
import Product from './Product'

const mapStateToProps = state => ({
  items: state.products.products
})

export default connect(mapStateToProps)(Product)
