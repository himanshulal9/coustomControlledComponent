import React from "react";
import "./App.css";

import { CssBaseline } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Navbar from "./component/header/navbar";
import Sidenav from "./component/header/sidenav";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./component/dashboard";
import GymProfile from "./component/gymProfile";
import AddUser from "./component/users/addUser";
import { withRouter } from "react-router-dom";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    height: "50px",
    lineHeight: "50px",
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    [theme.breakpoints.between("xs", "sm")]: {
      width: "100%",
      marginLeft: "0px",
    },
  },
  drawer: {
    [theme.breakpoints.between("xs", "sm")]: {
      width: drawerWidth,
      display: "none",
    },
  },
  menuButton: {
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.between("xs", "sm")]: {
      display: "block",
    },
  },
  // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    padding: theme.spacing(3),
    width: "100%",
    marginTop: "50px",
    marginLeft: drawerWidth,
    [theme.breakpoints.between("xs", "sm")]: {
      marginLeft: "0px",
    },
  },
}));

function App(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar classes={classes} onToogle={handleDrawerToggle} />

      <Sidenav
        container={container}
        classes={classes}
        theme={theme}
        handleOpen={mobileOpen}
        handleClose={handleDrawerToggle}
      />

      <main className={classes.content}>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/gymProfile" component={GymProfile} />
          <Route path="/users/addUser" component={AddUser} />
          <Route
            path="/"
            render={() => {
              return <h1>Not found page</h1>;
            }}
          />
        </Switch>
      </main>
    </div>
  );
}

export default withRouter(App);
