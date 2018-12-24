import React, { Component } from 'react';

class Cart extends Component {
    state = { count: 0 }
    render() { 
        return (<>
            <h1> Cart </h1>
            <p> count = {this.state.count} </p>
            </>
          );
    }
}
 
export default Cart;