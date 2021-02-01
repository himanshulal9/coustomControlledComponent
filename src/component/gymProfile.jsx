import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Card, CardContent, CardActions } from "@material-ui/core";
// import { List, ListItem, ListItemText } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paperGrid: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  profileImg: {
    width: "150px",
    height: "150px",
    border: "100%",
  },
  // card content style
  cardContent: {
    display: "flex",
    flexFlow: "row wrap",
  },
  cardHeader: {
    paddingLeft: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  cardList: {
    padding: "4px 0px",
    color: "#555565",
  },
  cardImg: {
    width: "85px",
    height: "auto",
  },
}));

const GymProfile = (props) => {
  const classes = useStyles();
  return (
    <div className="GymprofileHeader">
      <Paper className={classes.paper}>
        <Grid container spacing={3} direction="row">
          <Grid item xs={12} sm={12}>
            <img
              className={classes.profileImg}
              src={require("./image/download.png")}
              alt=""
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">Welcome Himanshu lal</Typography>
            <Typography variant="body1">
              Hope you will enjoy and get relax with our management system
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={2} direction="row">
        {/* gym profile  */}
        <Grid item xs={12} sm={6}>
          <Card>
            <CardActions className={classes.cardHeader}>
              <Typography variant="h5" component="h2">
                Gym Profile
              </Typography>
            </CardActions>
            <CardContent>
              <Grid container direction="row">
                <Grid item xs={8}>
                  <Grid container direction="column">
                    <Grid
                      container
                      direction="row"
                      className={classes.cardList}
                    >
                      <Grid item xs={4}>
                        <Typography variant="body1" component="h3">
                          Name
                        </Typography>
                      </Grid>
                      <Grid item xs>
                        <Typography variant="body1" component="p">
                          : Touseef Alam
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      className={classes.cardList}
                      container
                      direction="row"
                    >
                      <Grid item xs={4}>
                        <Typography variant="body1" component="h3">
                          Address
                        </Typography>
                      </Grid>
                      <Grid item xs>
                        <Typography variant="body1" component="p">
                          : Chick toli patna city
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid
                      className={classes.cardList}
                      container
                      direction="row"
                    >
                      <Grid item xs={4}>
                        <Typography variant="body1" component="h3">
                          Whatsaap
                        </Typography>
                      </Grid>
                      <Grid item xs>
                        <Typography variant="body1" component="p">
                          : 9852014783
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      className={classes.cardList}
                      container
                      direction="row"
                    >
                      <Grid item xs={4}>
                        <Typography variant="body1" component="h3">
                          Mobile No
                        </Typography>
                      </Grid>
                      <Grid item xs>
                        <Typography variant="body1" component="p">
                          : 9852014783
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Grid container justify="center" alignItems="center">
                    <img
                      src={require("./image/profile.png")}
                      className={classes.responsiveImg}
                      alt="Gym profileimage"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Manage Gym Contact
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* active status  */}
        <Grid item xs={12} sm={6}>
          <Card>
            <CardActions className={classes.cardHeader}>
              <Typography variant="h5" component="h2">
                Gym Profile
              </Typography>
            </CardActions>
            <CardContent>
              <Grid container direction="row">
                <Grid item xs={8}></Grid>
                <Grid item xs={4}>
                  <Grid container justify="center" alignItems="center">
                    <img
                      src={require("./image/profile.png")}
                      className={classes.responsiveImg}
                      alt="Gym profileimage"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Manage Gym Contact
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default GymProfile;
