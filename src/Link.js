import React, { Component } from "react";
import { Typography, withStyles } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import classNames from "classnames";

const Link = ({ classes, title, icon, source }) => (
  <a target="_blank" href={source} class="link">
    <Icon style={{ fontSize: 80 }}>cloud_upload</Icon>
    <span class="title">{title}</span>
  </a>
);

const styles = theme => ({

  title: {
    margin: "0 auto"
  }
});

export default withStyles(styles)(Link);
