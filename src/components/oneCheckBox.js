import React from 'react';
import { Checkbox } from '@material-ui/core';

export default function CfOneItem(props) {
  
  const [checked, setChecked] = React.useState(props.defaultValue);
  const name = props.name
  const handleFieldChange = props.handleFieldChange

  const handleChange = (event) => {
    setChecked(event.target.checked);
    handleFieldChange(name, event.target.checked)
  };

  return (
      <Checkbox
        checked={checked}
        onChange={handleChange}
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
  );
}