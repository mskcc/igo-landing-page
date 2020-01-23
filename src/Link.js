import React, { Component } from "react";
import { Typography, withStyles } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

import classNames from "classnames";

const Link = ({ classes, style, title, icon, source, disabled }) =>
  disabled ? (
    <a className="disabled-link">
      <Icon style={{ fontSize: 80 }}>{icon}</Icon>
      <div className="title">{title}</div>
    </a>
  ) : (
    <a target="_blank" href={source} className={"link " + style}>
      <Icon style={{ fontSize: 80 }}>{icon}</Icon>
      <div className="title">{title}</div>
    </a>
  );

const styles = theme => ({
  title: {
    margin: "0 auto"
  }
});

export default withStyles(styles)(Link);
