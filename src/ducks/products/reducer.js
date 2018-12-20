import {CLEAR_PRODUCTS, ADD_PRODUCTS} from './actionTypes'


const INIT = []

export default function productsReducer (state = INIT, action) {
  const { type, payload } = action

  switch (type) {
    case CLEAR_PRODUCTS:
      return []

    case ADD_PRODUCTS:
        // if (payload.productsArray) 
        // console.log("add products!!",payload.productsArray);
      return [...state, ...payload.productsArray]

    default:
      return state
  }
}
