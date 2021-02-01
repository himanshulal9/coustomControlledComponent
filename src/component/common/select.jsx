import React from "react";
import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  selectItem: {
    padding: "0px",
  },
}));

const SelectComponent = ({ name, label, options, error, rest }) => {
  return (
    <TextField
      select
      id={name}
      name={name}
      label={label}
      SelectProps={{
        native: true,
      }}
      fullWidth={true}
      size='small'
      variant='outlined'
      error={error}
      helperText={error ? "Required" : ""}
      {...rest}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.key}
        </option>
      ))}
    </TextField>
  );
};

export default SelectComponent;
