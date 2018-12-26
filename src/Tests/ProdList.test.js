import React from 'react'
import { mount } from 'enzyme'
import ProductList from '../routes/ProductList/ProductList'
import { products } from '../db/yacht.json'
import { BrowserRouter } from 'react-router-dom'

describe('<ProductList />', () => {
  let component
  let myProps = {
    items: products,
    start: 3,
    end: 6,
    error: null,
    fetchProducts: (page, limit) => {},
    addProductToCart: product => {}
  }

  it('ProductList with 6 products ', () => {
    component = mount(
      <BrowserRouter>
        <ProductList {...myProps} />
      </BrowserRouter>
    )
    expect(component.find('ul').children().length).toBe(6)
  })
})
