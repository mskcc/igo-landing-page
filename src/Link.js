import React, { Component } from "react";
import { Typography, withStyles } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import classNames from "classnames";

const Link = ({ classes, title, icon, source, disabled }) =>
  disabled ? (
    <a className="disabled-link">
      <Icon style={{ fontSize: 80 }}>{icon}</Icon>
      <span className="title">{title}</span>
    </a>
  ) : (
    <a target="_blank" href={source} className="link">
      <Icon style={{ fontSize: 80 }}>{icon}</Icon>
      <span className="title">{title}</span>
    </a>
  );

const styles = theme => ({
  title: {
    margin: "0 auto"
  }
});

export default withStyles(styles)(Link);
