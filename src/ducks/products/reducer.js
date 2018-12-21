import { ADD_PRODUCTS, SAVE_START, SAVE_END, SAVE_ERROR } from './actionTypes'

const INIT = { products: [], start: 0, error: null }

export default function productsReducer (state = INIT, action) {
  const { type, payload } = action

  switch (type) {
    case ADD_PRODUCTS:
      return {
        ...state,
        products: [...state.products, ...payload.productsArray]
      }

    case SAVE_START:
      return { ...state, start: payload }

    case SAVE_END:
      return { ...state, end: payload }

    case SAVE_ERROR:
      return { ...state, error: payload }

    default:
      return state
  }
}
