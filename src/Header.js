import React, { Component } from "react";
import {
  Avatar,
  AppBar,
  Toolbar,
  Button,
  Typography,
  withStyles
} from "@material-ui/core";

import classNames from "classnames";
import image from "./msk.png";

const Header = ({ classes, loggedIn }) => (
  // <div className={classes.mskccHeader}>
  <AppBar position="static" title={image} className={classes.header}>
    <Toolbar>
      <Avatar alt="mskcc logo" src={image} className={classes.avatar} />

      <Typography color="inherit" variant="h6" className={classes.title}>
        Integrated Genomics Operation
      </Typography>
    </Toolbar>
  </AppBar>

  // </div>
);

const styles = theme => ({
  header: {
    backgroundColor: theme.palette.primary.logo,
    color: "white",
    textAlign: "center"
  },
  title: {
    margin: "0 auto"
  },
  avatar : {
    position: "absolute",
  }
});

export default withStyles(styles)(Header);
