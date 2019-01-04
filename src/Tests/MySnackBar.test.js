import React from 'react'
import { mount } from 'enzyme'
import MySnackbar from '../common/MySnackbar'

describe('<MySnackbar />', () => {
  let component
  const myMock = jest.fn()
  const myProps = {
    message: 'my test message',
    onClose: myMock,
    variant: 'error'
  }

  beforeEach(() => {
    component = mount(<MySnackbar {...myProps} />)
  })

  it('MySnackbar display "my test message"', () => {
    expect(component.find('#client-snackbar').text()).toBe('my test message')
  })

  it('MySnackbar don`t close after blind click ', () => {
    component.find('div.snackBar').simulate('click')
    expect(myMock).toBeCalledTimes(0);
  })

  it('MySnackbar close after close button click', () => {
    expect(myMock).not.toBeCalled()
    component.find('button').simulate('click')
    expect(myMock).toBeCalledTimes(1);
  })


})
