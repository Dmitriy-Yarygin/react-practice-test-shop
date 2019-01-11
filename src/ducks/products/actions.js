import * as actionTypes from './actionTypes'

export const saveId = id => ({
  type: actionTypes.SAVE_ID,
  payload: id
})

export const getProductById = id => dispatch =>
  fetch(`http://localhost:3005/api/products?id=${id}`)
    .then(response => response.json())
    .then(productItem => {
      dispatch(addProductItem(productItem[0]))
      dispatch(saveError(null))
    })
    .catch(error => {
      dispatch(saveError(error.message))
    })

export const addProductItem = productItem => ({
  type: actionTypes.ADD_PRODUCT_ITEM,
  payload: productItem
})

export const fetchProducts = (start, limit) => dispatch =>
  fetch(`http://localhost:3005/api/products?_start=${start}&_limit=${limit}`)
    .then(response => {
      dispatch(saveEnd(response.headers.get('X-Total-Count')))
      return response.json()
    })
    .then(productsArray => {
      if (productsArray.length === limit) {
        dispatch(saveStart(start + limit))
      }
      dispatch(addProducts({ productsArray }))
      dispatch(saveError(null))
    })
    .catch(error => {
      dispatch(saveError(error.message))
    })

export const addProducts = ({ productsArray }) => ({
  type: actionTypes.ADD_PRODUCTS,
  payload: { productsArray }
})

export const saveStart = start => ({
  type: actionTypes.SAVE_START,
  payload: start
})

export const saveEnd = end => ({
  type: actionTypes.SAVE_END,
  payload: Number(end)
})

export const saveError = error => ({
  type: actionTypes.SAVE_ERROR,
  payload: error
})
