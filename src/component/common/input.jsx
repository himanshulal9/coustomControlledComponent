import React from "react";
import { TextField } from "@material-ui/core";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div style={{ margin: "5px 0px" }}>
      <TextField
        variant="outlined"
        size="small"
        id={name}
        label={label}
        name={name}
        helperText={error}
        error={error}
        {...rest}
      />
    </div>
  );
};

export default Input;
