import React from 'react'
import { mount } from 'enzyme'
import ProductList from '../routes/ProductList/ProductList'
import { products } from '../db/yacht.json'

describe('<ProductList />', () => {
  let component

  let myProps = {
    items: products,
    start: 3,
    end: 6,
    error: state.products.error,
  fetchProducts: (page, limit) => dispatch(fetchProducts(page, limit)),
    addProductToCart: (product) => dispatch(addProductToCart(product)),

  }

  


  it('ProductList with 6 products ', () => {
    component = mount(
      <ProductList cartItems={[{ ...products[0] }, { ...products[3] }]} />
    )
    console.log(component.debug())
    expect(component.find('ul').children().length).toBe(2)
  })
})
