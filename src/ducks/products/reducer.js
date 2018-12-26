import * as actionTypes from './actionTypes'

const INIT = { products: [], start: 0, id: null, error: null }

export default function productsReducer (state = INIT, action) {
  const { type, payload } = action

  switch (type) {
    case actionTypes.ADD_PRODUCTS:
      return {
        ...state,
        products: [...state.products, ...payload.productsArray]
      }

    case actionTypes.SAVE_START:
      return { ...state, start: payload }

    case actionTypes.SAVE_END:
      return { ...state, end: payload }

    case actionTypes.SAVE_ERROR:
      return { ...state, error: payload }

    case actionTypes.SAVE_ID:
      return { ...state, id: payload }

    case actionTypes.ADD_PRODUCT_ITEM:
      return {
        ...state,
        product: payload
      }

    default:
      return state
  }
}
