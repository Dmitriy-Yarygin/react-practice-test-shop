import {
  CLEAR_PRODUCTS,
  ADD_PRODUCTS,
  SAVE_LIMIT,
  SAVE_START
} from './actionTypes'

const INIT = { products: [], start: 0, limit: 0 }

export default function productsReducer (state = INIT, action) {
  const { type, payload } = action

  switch (type) {
    case CLEAR_PRODUCTS:
      return INIT

    case ADD_PRODUCTS:
      return {
        ...state,
        products: [...state.products, ...payload.productsArray]
      }

    case SAVE_LIMIT:
      return { ...state, limit: payload }

    case SAVE_START:
      return { ...state, start: payload }

    default:
      return state
  }
}
