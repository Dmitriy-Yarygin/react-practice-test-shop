import * as actionTypes from "./actionTypes";

export const addProductToCart = product => ({
  type: actionTypes.ADD_PRODUCT,
  payload: product
});

export const delProductFromCart = id => ({
  type: actionTypes.DELETE_PRODUCT,
  payload: id
});

export const editQantityInCart = (id, count) => ({
  type: actionTypes.EDIT_PRODUCT,
  payload: {id, count}
});



