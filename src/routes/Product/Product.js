import React, { Component } from 'react'
import ProductNotFound from '../../common/ProductNotFound'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  button: {
    margin: theme.spacing.unit,
    width: 150
  }
})

class Product extends Component {
  componentWillMount () {
    const id = Number(this.props.match.params.productId)
    this.props.saveId(id)
    if (
      !(this.props.item && this.props.item.id && this.props.item.id === id) &&
      !(
        this.props.items &&
        this.props.items.filter(item => item.id === id).length > 0
      )
    ) {
      this.props.getProductById(id)
    }
  }

  goBack = () => {
    this.props.history.goBack()
  }

  buy = () => {
    this.props.addProductToCart( this.props.item );
  }

  render () {
    const id = Number(this.props.match.params.productId)
    if (!this.props.item || (this.props.item.id && this.props.item.id !== id)) {
      return <ProductNotFound id={id} />
    }
    const {
      name,
      url,
      year,
      length,
      location,
      material,
      description,
      cost
    } = this.props.item
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Typography variant='h2' component='h2' gutterBottom>
          {name}
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} md={4}>
            <Typography variant='body1' gutterBottom>
              <b>Year: </b> {year}
            </Typography>
            <Typography variant='body1' gutterBottom>
              <b>Length: </b> {length}
            </Typography>
            <Typography variant='body1' gutterBottom>
              <b>Located In: </b> {location}
            </Typography>
            <Typography variant='body1' gutterBottom>
              <b>Hull Material: </b> {material}
            </Typography>
            <Typography variant='body1' gutterBottom>
              <b>Current Price: </b> {cost.toLocaleString() || cost}
            </Typography>
            <Typography component='p'>{description}</Typography>
            <Button
              onClick={this.goBack}
              variant='outlined'
              className={classes.button}
            >
              Return
            </Button>
            <Button
              onClick={this.buy}
              variant='outlined'
              color='primary'
              className={classes.button}
            >
              Buy
            </Button>
          </Grid>
          <Grid item xs={12} md={8}>
            <CardMedia
              className={classes.media}
              image={url}
              title='Sail yacht'
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

Product.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Product)
