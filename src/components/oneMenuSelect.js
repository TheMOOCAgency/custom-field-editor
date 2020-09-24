import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    maxWidth: 250,
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [fieldValue, setFieldValue] = React.useState(props.defaultValue);
  const handleFieldChange = props.handleFieldChange
  const name = props.name

  const handleChange = (event) => {
    setFieldValue(event.target.value);
    handleFieldChange(name, event.target.value)
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        value={fieldValue}
        onChange={handleChange}
        displayEmpty
        className={classes.selectEmpty}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        {props.options.map((option, key) => {return <MenuItem key={key} value={option.value}>{option.name}</MenuItem>})}
      </Select>
    </FormControl>
  );
}
