import { createSelector } from 'reselect'

const productSelector = state => state.products
const productsInCartSelector = state => state.cart

export const choosenProduct = createSelector(
  [productSelector],
  products => {
    if (!products.id) {
      return null
    }
    if (products.product && products.product.id === products.id) {
      return products.product
    }
    if (products.products) {
      const filteredProduct = products.products.filter(
        item => item.id === products.id
      )

      if (filteredProduct.length === 1) {
        const product = filteredProduct[0]
        return product
      }
    }
    return null
  }
)

export const cartProductsCount = createSelector(
  [productsInCartSelector],
  productsInCart => {
    return productsInCart.reduce((sum, item) => sum + Number(item.count), 0)
  }
)

export const cartProductsTotalCount = createSelector(
  [productsInCartSelector],
  productsInCart => {
    return productsInCart.reduce((sum, item) => sum + item.count * item.cost, 0)
  }
)
