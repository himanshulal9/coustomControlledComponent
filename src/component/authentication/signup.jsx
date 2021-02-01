import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(2, 1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  gridRow: {
    margin: theme.spacing(0, 1),
    boxSizing: "border-box",
  },
  gridCol: {
    padding: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp({ renderInput, renderButton }) {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm" className={classes.root}>
      <CssBaseline />

      <Paper variant="elevation" className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <Grid container className={classes.gridRow}>
          <Grid item sm={6} className={classes.gridCol}>
            {renderInput("gym_name", "Gym Name")}
          </Grid>
          <Grid item sm={6} className={classes.gridCol}>
            {renderInput("owner_name", "owner_name")}
          </Grid>
        </Grid>
        <Grid container className={classes.gridRow}>
          <Grid item sm={6} className={classes.gridCol}>
            {renderInput("email", "Email")}
          </Grid>
          <Grid item sm={6} className={classes.gridCol}>
            {renderInput("password", "Password", "password")}
          </Grid>
        </Grid>
        <Grid container className={classes.gridRow}>
          <Grid item sm={12} className={classes.gridCol}>
            {renderInput("owner_contact_number", "Contact no...", "number")}
          </Grid>
        </Grid>
        <Grid container className={classes.gridRow}>
          <Grid item sm={12} className={classes.gridCol}>
            {renderInput("address", "Address")}
          </Grid>
        </Grid>
        <Grid container className={classes.gridRow}>
          <Grid item sm={12} className={classes.gridCol}>
            {renderButton("SignUp", "contained", "medium", "primary", true)}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
