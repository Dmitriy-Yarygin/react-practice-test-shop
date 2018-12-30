import React, { Component } from "react";
import CartItem from "./CartItem";
import "./Cart.css";

class Cart extends Component {
  render() {
    return (
      <>
        <h2> Cart </h2>
        <ul className="cart-list">
          {this.props.cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              delProductFromCart={this.props.delProductFromCart}
              editQantityInCart={this.props.editQantityInCart}
            />
          ))}
        </ul>
        <h3 className="cart-totalSum">Total sum: {this.props.cartProductsTotalCount}</h3>
      </>
    );
  }
}

export default Cart;
