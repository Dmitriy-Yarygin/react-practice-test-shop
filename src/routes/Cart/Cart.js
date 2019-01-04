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
              currency={this.props.currency}
              delProductFromCart={this.props.delProductFromCart}
              editQantityInCart={this.props.editQantityInCart}
            />
          ))}
        </ul>
        <h3 className="cart-totalSum">
          Total sum: {this.props.cartProductsTotalCount}{" "}
          {this.props.currency.designation}
        </h3>
      </>
    );
  }
}

export default Cart;
