import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const styles = theme => ({
  card: {
    maxWidth: 250,
    margin: theme.spacing.unit //* 3
  },
  media: {
    height: 200
  }
});

function ProductCard(props) {
  const { classes, item } = props;
  let { id, name, url, cost } = item;
  if (!isNaN(parseFloat(cost)) && isFinite(cost)) {
    cost = cost.toLocaleString();
  }
  const path = `/product/${id}`;
  return (
    <Card className={classes.card}>
      <Link to={path}>
        <CardActionArea>
          <CardMedia className={classes.media} image={url} title="Yaht" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography component="p">Current Price: {cost}</Typography>
          </CardContent>
        </CardActionArea>
      </Link>

      <CardActions>
        <Button size="large" color="primary">
          <Link to={path}>Detailes</Link>
        </Button>
        <Button size="large" color="primary">
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductCard);
