import React, { Component } from 'react';

class Product extends Component {
    state = {  }
    render() { 
        const {name="VASYA", description="description", cost="cost"} = this.props
        return ( <div>
            <img src='https://via.placeholder.com/100' alt='avatar' />
            <h4>{name}</h4>
            <p>{description}</p>
            <p>{cost}</p>
          </div> );
    }
}
 
export default Product;

