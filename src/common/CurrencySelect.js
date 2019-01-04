import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import NativeSelect from "@material-ui/core/NativeSelect";
// import Input from '@material-ui/core/Input';
import {CURRENCIES} from "./Constants";

const styles = theme => ({
  root: {
    color: "inherit",
  },
  select: {
    padding: 0,
    minWidth: "2em",
  },
  icon: {
    color: "inherit",
  },
});

class CurrencySelect extends React.Component {
  handleChange = event => {
    this.props.changeCurrency(event.target.value);
  };

  render() {
    const { classes } = this.props;

    return (
        <NativeSelect
          classes={classes}
          value={this.props.currency}
          onChange={this.handleChange}
        >
          {CURRENCIES.map(option => (
            <option key={option.value} value={option.value} style={{color: "black", backgroundColor: "inherit"}}>
              {option.label}
            </option>
          ))}
        </NativeSelect>
    );
  }
}

CurrencySelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CurrencySelect);
