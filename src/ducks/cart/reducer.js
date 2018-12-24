import * as actionTypes from './actionTypes'

const INIT = []

export default function productsReducer (state = INIT, action) {
  const { type, payload } = action

  switch (type) {
    case actionTypes.DELETE_PRODUCT:
      return state.filter(item => item.id !== payload)

    case actionTypes.ADD_PRODUCT:
      let countChanged = false
      let newState = state.map(item => {
        if (item.id === payload.id) {
          item.count += 1
          countChanged = true
        }
        return item
      })
      if (!countChanged) {
        newState.push({ ...payload, count: 1 })
      }
      return newState

    case actionTypes.EDIT_PRODUCT:
      return state.map(item => {
        if (item.id === payload.id) {
          item.count = payload.count
        }
        return item
      })

    default:
      return state
  }
}
