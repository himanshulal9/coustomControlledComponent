import React from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  sideNavImg: {
    width: "75px",
    borderRadius: "100%",
  },
  nested: {
    paddingLeft: theme.spacing(4),
    paddingTop: "2px",
    paddingBottom: "2px",
  },
  active: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main,
  },
}));

export function ListSingleTab({ iconLabel, label, navPath, nested }) {
  const classes = useStyles();
  return (
    <NavLink to={navPath} activeStyle={{ color: "red" }}>
      <ListItem className={nested ? classes.nested : ""} button>
        <ListItemIcon>
          <i className={iconLabel}></i>
        </ListItemIcon>
        <ListItemText>{label}</ListItemText>
      </ListItem>
    </NavLink>
  );
}

export function ListWithAvatar() {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      spacing={2}
      direction="column"
    >
      <Grid item xs={12}>
        <img
          className={classes.sideNavImg}
          src={require("../image/logo192.png")}
          alt="UserImage"
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">UltimateFitnessco</Typography>
        <Typography variant="subtitle2">UltimateFitnessco@gmail.com</Typography>
      </Grid>
    </Grid>
  );
}
