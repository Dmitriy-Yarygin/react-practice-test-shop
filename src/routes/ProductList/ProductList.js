import React, { Component } from "react";
import "./ProductList.css";
import ProductCard from "./ProductCard";
import Button from "@material-ui/core/Button";

export default class ProductList extends Component {
  state = { products: [], start: 0, limit: 6 };

  componentDidMount() {
    const start = this.props.start;
    if (start) {
      this.setState({ start });
    }
    if (this.props.items.length === 0) {
      this.props.fetchProducts(this.state.start, this.state.limit);
    }
  }

  showMore = () => {
    const start = this.state.start + this.state.limit;
    this.props.fetchProducts(start, this.state.limit);
    this.setState({ start });
  };

  componentWillUnmount() {
    this.props.saveStart(this.state.start);
  }

  render() {
    const products = this.props.items;
    const isLast = products.length >= this.props.end;
    return (
      <>
        <ul className="products">
          {products.map(item => (
            <ProductCard key={item.id} item={item} />
          ))}
        </ul>
        <div>
          <Button
            variant="contained"
            color="primary"
            disabled={isLast}
            fullWidth
            onClick={this.showMore}
          >
            Show more ...
          </Button>
        </div>
      </>
    );
  }
}
