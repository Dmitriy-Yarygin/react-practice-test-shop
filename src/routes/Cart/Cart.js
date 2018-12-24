import React, { Component } from 'react'
import CartItem from './CartItem'
import './Cart.css'

class Cart extends Component {
  render () {
    const totalSum = this.props.cartItems.reduce(
      (sum, item) => sum + item.count * item.cost,
      0
    )
    return (
      <>
        <h2> Cart </h2>
        <ul className='cartList'>
          {this.props.cartItems.map(item => (
            <CartItem key={item.id} item={item} delProductFromCart={this.props.delProductFromCart} editQantityInCart={this.props.editQantityInCart} />
          ))}
        </ul>
        <h3> Total sum: {totalSum} </h3>
      </>
    )
  }
}

export default Cart
