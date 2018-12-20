import { ADD_PRODUCTS, SAVE_START, SAVE_END } from "./actionTypes";

export const addProducts = ({ productsArray }) => ({
  type: ADD_PRODUCTS,
  payload: { productsArray }
});

export const fetchProducts = (start, limit) => dispatch =>
  fetch(`http://localhost:3005/products?_start=${start}&_limit=${limit}`)
    .then(response => response.json())
    .then(productsArray => {
      if (productsArray.length < limit) {
        dispatch(saveEnd(start + productsArray.length));
      }
      dispatch(addProducts({ productsArray }));
    });

export const saveStart = start => ({
  type: SAVE_START,
  payload: start
});

export const saveEnd = end => ({
  type: SAVE_END,
  payload: end
});
