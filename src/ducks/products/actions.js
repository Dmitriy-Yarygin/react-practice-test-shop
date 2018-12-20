import { CLEAR_PRODUCTS, ADD_PRODUCTS } from './actionTypes'

export const clearStore = () => ({
  type: CLEAR_PRODUCTS,
  payload: {}
})

export const addProducts = ({ productsArray }) => ({
  type: ADD_PRODUCTS,
  payload: { productsArray }
})

export const fetchProducts = ({ page, limit }) => dispatch =>
  fetch(`http://localhost:3005/products?_page=${page}&_limit=${limit}`)
    .then(response => response.json())
    .then(productsArray => dispatch(addProducts({ productsArray })))
