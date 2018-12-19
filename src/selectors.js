import { createSelector } from "reselect";

const productSelector = state => state.products;

export const allProducts = createSelector(
  [productSelector],
  products => products

);

