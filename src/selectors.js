import { createSelector } from "reselect";

const productSelector = state => state.products;

export const choosenProduct = createSelector(
  [productSelector],
  products => {
    if (!products.id) {
      return null;
    }
    if (products.product && products.product.id === products.id) {
      return products.product;
    }
    if (products.products) {
      const filteredProduct = products.products.filter(
        item => item.id === products.id
      );
      console.log(filteredProduct);

      if (filteredProduct.length === 1) {
        const product = filteredProduct[0];
        return product;
      }
    }
    return null;
  }
);
