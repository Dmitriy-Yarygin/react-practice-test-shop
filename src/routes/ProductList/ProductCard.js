import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  card: {
    maxWidth: 345,
    margin: theme.spacing.unit * 3
  },
  media: {
    height: 140
  }
})

function ProductCard (props) {
  const { classes, item } = props
  const { name, description, cost } = item
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='http://yachtrus.ru/arfa-fad-dea3/uploads/2015/01/%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%8110.jpg'
          title='Yaht'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {name}
          </Typography>
          <Typography component='p'>Product cost: {cost}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='large' color='primary'>
          Buy
        </Button>
      </CardActions>
    </Card>
  )
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProductCard)
