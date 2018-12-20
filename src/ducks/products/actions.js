import {
  CLEAR_PRODUCTS,
  ADD_PRODUCTS,
  SAVE_LIMIT,
  SAVE_START
} from './actionTypes'

export const clearStore = () => ({
  type: CLEAR_PRODUCTS
})

export const addProducts = ({ productsArray }) => ({
  type: ADD_PRODUCTS,
  payload: { productsArray }
})

export const fetchProducts = (start, limit) => dispatch =>
  // fetch(`http://localhost:3005/products?_page=${page}&_limit=${limit}`)
  fetch(`http://localhost:3005/products?_start=${start}&_limit=${limit}`)
    .then(response => response.json())
    .then(productsArray => dispatch(addProducts({ productsArray })))

export const saveLimit = limit => ({
  type: SAVE_LIMIT,
  payload: limit
})

export const saveStart = start => ({
  type: SAVE_START,
  payload: start
})
