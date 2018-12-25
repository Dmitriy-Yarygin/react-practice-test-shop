import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const ProductNotFound = props => {
  return (
    <div>
      <br/>
      <Typography
        variant="h5"
        component="h2"
        align="center"
        color="error"
        paragraph
      >
        Sorry. Product with <i>id={props.id}</i> not found
      </Typography>
      <Link to="/">
        <Button variant="outlined" fullWidth color="primary">
          Return to the main page
        </Button>
      </Link>
    </div>
  );
};

export default ProductNotFound;
