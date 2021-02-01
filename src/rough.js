import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Typography,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className="App">
        <div style={{ display: "flex" }}>
          <Drawer
            style={{ width: "240px" }}
            variant="persistent"
            anchor="left"
            open="true"
            classes={{ paper: classes.drawerPaper }}
          >
            <List>
              <Link to="/" classes={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
              <Link to="/about" classes={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary={"About"} />
                </ListItem>
              </Link>
            </List>
          </Drawer>
          <Switch>
            <Route exact path="/">
              <Container>
                <Typography variant="h3" gutterBottom>
                  Home
                </Typography>
                <Typography variant="body1" gutterBottom>
                  lorem50
                  lksldkafha;lskdhfasld;hfkalk;sdfhsalkdfh;lkfhadlskfnaosfywerik]akljflkfjasdlfk;jasl;dkfjkalsdjf'lkasjdf'lkuiwe]prlf'sdlfkhyew[
                </Typography>
              </Container>
            </Route>
            <Route exact path="/about">
              <Container>
                <Typography variant="h3" gutterBottom>
                  About
                </Typography>
                <Typography variant="body1" gutterBottom>
                  lorem50
                  lksldkafha;lskdhfasld;hfkalk;sdfhsalkdfh;lkfhadlskfnaosfywerik]akljflkfjasdlfk;jasl;dkfjkalsdjf'lkasjdf'lkuiwe]prlf'sdlfkhyew[
                </Typography>
              </Container>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
