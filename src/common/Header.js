import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {

  render () {
    return (
      <div className='header'>
      <img src='https://via.placeholder.com/30' alt='avatar' />
        <NavLink to='/' activeClassName='active'>
          Home
        </NavLink>     
      </div>
    )
  }
}

export default Header
/*

        <NavLink to='/posts' activeClassName='active'>
          Posts
        </NavLink>
        <NavLink to='/comments' activeClassName='active'>
          Comments
        </NavLink>

*/