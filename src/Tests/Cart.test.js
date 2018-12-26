import React from 'react'
import { shallow } from 'enzyme'
import Cart from '../routes/Cart/Cart'
import { products } from '../db/yacht.json'

describe('<Cart />', () => {
  let component

  it('Empty Cart has Total sum ', () => {
    component = shallow(<Cart cartItems={[]} cartProductsTotalCount={0} />)
    console.log(component.find('h3').debug())
    expect(component.find('ul').children().length).toBe(0)
    expect(component.find('h3').text()).toBe('Total sum: 0')
  })

  it('Cart with 2 products ', () => {
    component = shallow(
      <Cart cartItems={[{ ...products[0] }, { ...products[3] }]} />
    )
    expect(component.find('ul').children().length).toBe(2)
  })
})
