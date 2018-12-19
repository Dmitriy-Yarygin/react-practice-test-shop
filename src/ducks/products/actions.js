import {CLEAR_PRODUCTS, ADD_PRODUCTS} from './actionTypes'

export const clearStore = () => ({
  type: CLEAR_PRODUCTS,
  payload: {}
})

export const addProducts = ({ productsArray }) => ({
  type: ADD_PRODUCTS,
  payload: { productsArray }
})
