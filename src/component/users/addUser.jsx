import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography } from "@material-ui/core";
import Joi from "joi-browser";
import Form from "./../common/form";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    padding: "0 12px",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class AddUser extends Form {
  state = {
    data: {
      name: "",
      phone: "",
      address: "",
      gender: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    phone: Joi.string().required().label("Phone no."),
    address: Joi.string().required().label("Address"),
    gender: Joi.string().required().label("Gender"),
  };

  render() {
    const classes = this.props;
    return (
      <div className='section adduser' id='addUser'>
        <Container maxWidth={"sm"}>
          <form className={styles.form} onSubmit={this.handleSubmit}>
            <Typography variant='h5' className={classes.pageHeader}>
              Add User
            </Typography>
            <Grid className={classes.grid} container direction={"row"}>
              <Grid item xs={12} sm={6}>
                {this.renderInput("name", "Name")}
              </Grid>
              <Grid item xs={12} sm={6}>
                {this.renderInput("phone", "Phone no.")}
              </Grid>
            </Grid>
            <Grid className={classes.grid} container direction={"row"}>
              <Grid item xs={12} sm={6}>
                {this.renderSelect({
                  name: "gender",
                  label: "Gender",
                  options: [
                    { key: "male", value: "male" },
                    { key: "female", value: "female" },
                  ],
                })}
              </Grid>
              <Grid item xs={12} sm={6}>
                {this.renderInput("address", "Address")}
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(AddUser);
