import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Product extends Component {
  state = {}

  goBack = () => {
    this.props.history.goBack()
  }
  render () {
    const id = Number(this.props.match.params.userId)
    const filtered = this.props.items.filter(item => item.id === id)
    if (filtered.length === 0) {
      return (
        <div>
          <h4>Sorry. Product not found </h4>
          <Link to='/'>Return home</Link>
        </div>
      )
    }
    const { name, description, cost } = filtered[0]
    return (
      <div>
        <h4>{name}</h4>
        <p>{description}</p>
        <p>{cost}</p>
        <button onClick={this.goBack}> Return </button>
      </div>
    )
  }
}

export default Product