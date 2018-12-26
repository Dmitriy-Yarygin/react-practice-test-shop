import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const styles = theme => ({
  card: {
    minWidth: 200,
    maxWidth: 250,
    margin: theme.spacing.unit //* 3
  },
  title: {
    height: 80,
  },
  media: {
    height: 200
  }
})

class ProductCard extends Component {

  buy = () => {
    this.props.addProductToCart(this.props.item)
  }

  render() { 
    const { classes, item } = this.props
    const { id, name, url, cost } = item
    const path = `/product/${id}`
    return (
      <Card className={classes.card}>
        <Link to={path}>
          <CardActionArea>
            <CardMedia className={classes.media} image={url} title='Yaht' />
            <CardContent>
              <Typography className={classes.title} variant='h5' component='h2'>
                {name}
              </Typography>
              <Typography component='p'>
                Current Price: {cost.toLocaleString() || cost}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
  
        <CardActions>
          <Button size='large' color='primary'>
            <Link to={path}>Detailes</Link>
          </Button>
          <Button onClick={this.buy} size='large' color='primary'>
            Buy
          </Button>
        </CardActions>
      </Card>
    )
  }
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductCard)
