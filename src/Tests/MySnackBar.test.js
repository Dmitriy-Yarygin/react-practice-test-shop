import React from 'react'
import { products } from '../db/yacht.json'
import renderer from 'react-test-renderer'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { BrowserRouter } from 'react-router-dom'
import { shallow, mount, render } from 'enzyme'
// import { expect } from 'chai';

configure({ adapter: new Adapter() })

/// ///////////////////////////////////////////////////////////////
// import MySnackbar from '../common/MySnackbar'

const MySnackbar = props => {
  return (
    <div>
      <h2> Just test of test </h2>
      <i> { props.variant } </i>
      <p className='msg'>{props.message}</p>
    </div>
  )
}

/// ////////////////////////////////////////////////////////////////

describe('<MySnackbar />', () => {
  let component
  const myMock = jest.fn()
  const myProps = { message: 'my test message', onClose: myMock, variant: 'error' }

  beforeEach(() => {
    component = shallow(<MySnackbar {...myProps} />)
  })

  it('1. MySnackbar props.message = "my test message" ', () => {
    expect(component.props().message).to.equal('my test message')
  })

  it('2. MySnackbar props.message = "my test message"', () => {
    // console.log('111111111111111111111111111111111111111111111111')
    // console.log(component)
    // console.log(component.props().message)
    // console.log('111111111111111111111111111111111111111111111111')
    expect(component.props().message).toBe('my test message')
  })

  it('renders correctly', () => {
    const tree = renderer.create(<MySnackbar {...myProps} />).toJSON()
        // console.log('22222222222222222222222222222222222222222222222')
        // console.log(tree)
        // console.log('22222222222222222222222222222222222222222222222')
    expect(tree).toMatchSnapshot()
  })
  
})
