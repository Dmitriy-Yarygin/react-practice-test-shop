import { combineReducers } from "redux";

import products from "./products/reducer";
import cart from "./cart/reducer";
import currency from "./currency/reducer";

export default combineReducers({
  products,
  cart,
  currency
});
