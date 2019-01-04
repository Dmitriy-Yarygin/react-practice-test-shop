import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { MAX_PRODUCT_COUNT } from "../../common/Constants";

const styles = theme => ({
  card: {
    minWidth: 200,
    maxWidth: 250,
    margin: theme.spacing.unit //* 3
  },
  title: {
    height: 90
  },
  media: {
    height: 200
  },
});

class ProductCard extends Component {
  delete = () => {
    this.props.delProductFromCart(this.props.item.id);
  };

  handleChange = e => {
    const count = Number(e.target.value);
    if (count > 0 && count <= MAX_PRODUCT_COUNT) {
      this.props.editQantityInCart(this.props.item.id, count);
    }
  };

  render() {
    const { classes, item, currency } = this.props;
    const { id, count, name, url } = item;
    const cost = Math.round(100 * (item.cost / currency.rate)) / 100;
    const path = `/product/${id}`;
    return (
      <Card className={classes.card}>
        <Link to={path}>
          <CardActionArea>
            <i>Id={id}</i>
            <CardMedia className={classes.media} image={url} title="Yaht" />
            <CardContent className={classes.title}>
              <Typography variant="h5" component="h2">
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
            <Grid xs={5}>
              <Typography component="p" align="center">
                Price:
                <br />
                {cost.toLocaleString()}
              </Typography>
            </Grid>
            <Grid xs={2}>
              <TextField
                label="Quantity:"
                value={count}
                onChange={this.handleChange}
                type="number"
                inputProps={{
                  classes: {root: {border: "2px solid yellow"}}
                }}
              />
            </Grid>
            <Grid xs={5}>
              <Typography component="p" color="primary" align="center">
                Sum:
                <br />
                <b>{(cost * count).toLocaleString()}</b>
              </Typography>
            </Grid>
        </CardActions>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          onClick={this.delete}
          size="small"
          className={classes.button}
        >
          Delete from cart
        </Button>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductCard);
