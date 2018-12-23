import React, { Component } from "react";
import "./Product.css";
import ProductNotFound from "../../common/ProductNotFound";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  button: {
    margin: theme.spacing.unit,
    width: 150
  }
});

class Product extends Component {
  componentWillMount() {
    console.log("componentWillMount");
    const id = Number(this.props.match.params.productId);
    this.props.saveId(id);
    if (
      !(this.props.item && this.props.item.id && this.props.item.id === id) &&
      !(
        this.props.items &&
        this.props.items.filter(item => item.id === id).length > 0
      )
    ) {
      this.props.getProductById(id);
    }
  }

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    const id = Number(this.props.match.params.productId);
    if (!this.props.item || (this.props.item.id && this.props.item.id !== id)) {
      return <ProductNotFound id={id} />;
    }
    const {
      name,
      url,
      year,
      length,
      location,
      material,
      description
    } = this.props.item;
    let cost = this.props.item.cost;
    if (!isNaN(parseFloat(cost)) && isFinite(cost)) {
      cost = cost.toLocaleString();
    }
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} md={4}>
            <h4>{name}</h4>
            <p>
              <b>Year: </b> {year}
            </p>
            <p>
              <b>Length: </b> {length}
            </p>
            <p>
              <b>Located In: </b> {location}
            </p>
            <p>
              <b>Hull Material: </b> {material}
            </p>
            <p>{description}</p>
            <p>
              <b>Current Price: </b> {cost}
            </p>
            <Button
              onClick={this.goBack}
              variant="outlined"
              className={classes.button}
            >
              Return
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Buy
            </Button>
          </Grid>

          <Grid item xs={12} md={8}>
            <CardMedia
              className={classes.media}
              image={url}
              title="Sail yacht"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

Product.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Product);
