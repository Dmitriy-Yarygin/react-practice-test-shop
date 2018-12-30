import React from 'react'
import { shallow } from 'enzyme'
import Cart from '../routes/Cart/Cart'
import { products } from '../db/yacht.json'

describe('<Cart />', () => {
  let component

  it('Empty Cart has Total sum ', () => {
    component = shallow(<Cart cartItems={[]} cartProductsTotalCount={0} />)
    expect(component.find('.cart-list').children().length).toBe(0)
    expect(component.find('.cart-totalSum').text()).toBe('Total sum: 0')
  })

  it('Cart with 2 products ', () => {
    component = shallow(
      <Cart cartItems={[{ ...products[0] }, { ...products[3] }]} />
    )
    expect(component.find('.cart-list').children().length).toBe(2)
  })
})
