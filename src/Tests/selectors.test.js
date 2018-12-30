import {
  choosenProduct,
  cartProductsCount,
  cartProductsTotalCount
} from '../selectors'
import { products } from '../db/yacht.json'

describe('Testing selectors', () => {
  const cart = [{ id: 1, count: 2, cost: 3 }, { id: 2, count: 3, cost: 4 }]

  test('Cart total count to be 5 ', () => {
    expect(cartProductsCount({ cart })).toBe(5)
  })

  test('Cart total sum to be 18 ', () => {
    expect(cartProductsTotalCount({ cart })).toBeCloseTo(18)
  })

  test('choosenProduct for id=11111 return null ', () => {
    expect(choosenProduct({ products: { id: 11111, products } })).toBeNull()
  })

  test('choosenProduct for id=11111 without products array return null ', () => {
    expect(choosenProduct({ products: { id: 11111 } })).toBeNull()
  })

  test('choosenProduct for id=1 to be "Southern Wind SW100 DS" ', () => {
    expect(choosenProduct({ products: { id: 1, products } }).name).toBe(
      'Southern Wind SW100 DS'
    )
  })

  test('choosenProduct for empty id return null ', () => {
    expect(choosenProduct({ products })).toBeNull()
  })

  test('choosenProduct for id=4 and empty products and filled product to be "Jongert 3200P" ', () => {
    expect(
      choosenProduct({
        products: {
          id: 4,
          products: [],
          product: { id: 4, name: 'Jongert 3200P' }
        }
      }).name
    ).toBe('Jongert 3200P')
  })
})
