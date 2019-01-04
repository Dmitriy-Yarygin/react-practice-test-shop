const styles = theme => ({
  root: {
    width: "100%",
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: "inherit"
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      color: "inherit"
    }
  },
});

export default styles;
