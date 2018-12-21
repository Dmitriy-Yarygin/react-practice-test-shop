import React, { Component } from 'react'
import Header from '../common/Header'
import { connect } from 'react-redux'
import {saveError} from '../ducks/products/actions'
import MySnackbar from '../common/MySnackbar'
import { withRouter } from "react-router"
import { compose } from 'redux';

class Layout extends Component {

  warningOnClose = () => {
    this.props.saveError(null)
  }
  
  render () {
    const msg = this.props.error;      
    return (
      <div>
        <Header />
        <MySnackbar
          message={msg}
          onClose={this.warningOnClose}
          variant='error'
        />
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: state.products.error
})

const mapDispatchToProps = dispatch => ({  
  saveError: flag => dispatch(saveError(flag)),
})

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Layout)