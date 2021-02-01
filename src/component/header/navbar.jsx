import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Icon,
} from "@material-ui/core";
const Navbar = ({ classes, onToogle }) => {
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onToogle} 
          className={classes.menuButton}
        >
          <Icon className="fa fa-bars"></Icon>
        </IconButton>
        <Typography variant="h6" noWrap>
          CloudyGym
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
