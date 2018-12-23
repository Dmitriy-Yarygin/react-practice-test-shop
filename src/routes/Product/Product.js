import React, { Component } from "react";
import "./Product.css";
import ProductNotFound from "../../common/ProductNotFound";

class Product extends Component {
  componentWillMount() {
    console.log("componentWillMount");
    const id = Number(this.props.match.params.productId);
    this.props.saveId(id);
    /*
      (this.props.item && this.props.item.id && this.props.item.id === id) ||
      (this.props.items && this.props.items.filter( item => item.id === id  ).length > 0 )
      */

     
      console.log('this.props.item',this.props.item);
    console.log('this.props.items ', this.props.items );
      if (
      !(this.props.item && this.props.item.id && this.props.item.id === id) &&
      !(this.props.items && this.props.items.filter(item => item.id === id).length > 0)
    ) {
      this.props.getProductById(id);
    }
  }

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    console.log("Product render");
    console.log(this.props);
    const id = Number(this.props.match.params.productId);

    if (!this.props.item || (this.props.item.id && this.props.item.id !== id)) {
      // console.log(id, "getProductById", this.props.item);
      // this.props.getProductById(id);
      return <ProductNotFound id={id} />;
    }

    const {
      name,
      url,
      year,
      length,
      location,
      material,
      description
    } = this.props.item;
    let cost = this.props.item.cost;
    if (!isNaN(parseFloat(cost)) && isFinite(cost)) {
      cost = cost.toLocaleString();
    }
    return (
      <div className="productPage">
        <h4>{name}</h4>
        <div>
          <p>
            <b>Year: </b> {year}
          </p>
          <p>
            <b>Length: </b> {length}
          </p>
          <p>
            <b>Located In: </b> {location}
          </p>
          <p>
            <b>Hull Material: </b> {material}
          </p>
          <p>{description}</p>
          <p>
            <b>Current Price: </b> {cost}
          </p>
          <button onClick={this.goBack}> Return </button>
        </div>
        <div>
          <img src={url} alt="sail yacht" />
        </div>
      </div>
    );
  }
}

export default Product;
