import React from 'react';
import { Link } from "react-router-dom";

const ProductNotFound = (props) => {
  return (
    <div>
      <h4>Sorry. Product {props.id} not found </h4>
      <Link to="/">Return home</Link>
    </div>
  );
}
 
export default ProductNotFound;