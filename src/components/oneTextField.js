import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  inputField: {
    width: 250,
  }
}));

export default function CfOneItem(props) {
  
  const classes = useStyles();
  const name = props.name
  const handleFieldChange = props.handleFieldChange
  const defaultValue = props.defaultValue
  
  const handleChange = (event) => {
    handleFieldChange(name, event.target.value)
  };

  return (
    <TextField
      id="outlined-search"
      defaultValue={defaultValue}
      type="search"
      variant="outlined"
      className={classes.inputField}
      onChange={handleChange}
    />
  );
}