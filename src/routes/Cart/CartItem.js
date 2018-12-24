import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  card: {
    maxWidth: 250,
    margin: theme.spacing.unit //* 3
  },
  title: {
    height: 90,
  },
  media: {
    height: 200
  }
})

class ProductCard extends Component {
  delete = () => {
    this.props.delProductFromCart(this.props.item.id)
  }

  handleChange = e => {
    const count = e.target.value
    if (count > 0 && count < 10) {
      this.props.editQantityInCart(this.props.item.id, count)
    }
  }

  render () {
    const { classes, item } = this.props
    const { id, count, name, url, cost } = item
    const path = `/product/${id}`
    return (
      <Card className={classes.card}>
        <Link to={path}>
          <CardActionArea>
            <i>Id={id}</i>
            <CardMedia className={classes.media} image={url} title='Yaht' />
            <CardContent className={classes.title}>
              <Typography variant='h5' component='h2'>
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>

        <CardActions>
          <Typography component='p'>Price: {cost.toLocaleString()}</Typography>
          <TextField
            id='standard-number'
            label='Quantity to buy:'
            value={count}
            onChange={this.handleChange}
            type='number'
          />
          <Typography component='p' color='primary'>
            Sum: <b>{(cost * count).toLocaleString()}</b>
          </Typography>
        </CardActions>

        <Button
          variant='outlined'
          color='secondary'
          fullWidth
          onClick={this.delete}
          size='small'
          className={classes.button}
        >
          Delete from cart
        </Button>
      </Card>
    )
  }
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProductCard)
