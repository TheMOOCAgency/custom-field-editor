import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import OneCheckBox from './oneCheckBox'
import OneMenuSelect from './oneMenuSelect'
import OneTextField from './oneTextField'

const useStyles = makeStyles(() => ({
  inputField: {
    width: 250,
  }
}));

export default function CfOneItem(props) {
  const classes = useStyles();
  const UserCustomFields = props.copyProps.user.custom_field
  const name = props.field.name
  const label = props.field.label
  const type = props.field.type
  const setCopyProps = props.setCopyProps
  const copyProps = props.copyProps
  const setCustomFieldModified = props.setCustomFieldModified

  const handleClickCreation = (name, type) => {
    let tempProps = {...copyProps}
    let newValue = ""
    if (type === "select") {
      newValue = props.field.options[0].value
    }
    tempProps.user.custom_field[name] = newValue
    setCopyProps(tempProps)
    setCustomFieldModified(true)
  };

  const handleClickDeletion = (name) => {
    let tempProps = {...copyProps}
    delete tempProps.user.custom_field[name]
    setCopyProps(tempProps)
    setCustomFieldModified(true)
  };

  const handleFieldChange = (name, value) => {
    let tempProps = {...copyProps}
    tempProps.user.custom_field[name] = value
    setCopyProps(tempProps)
    setCustomFieldModified(true)
  };

  const getButton = (type) => {
    if (type === 'checkbox') {
      return <CheckBoxIcon />
    } else if (type === 'select') {
      return <ListIcon />
    } else if (type === 'text') {
      return <BorderColorIcon />
    }
  };

  const getField = (type, defaultValue, name) => {
    if (type === 'checkbox') {
      return <OneCheckBox defaultValue={defaultValue} className={classes.inputField} handleFieldChange={handleFieldChange} name={name}/>
    } else if (type === 'select') {
      return <OneMenuSelect defaultValue={defaultValue} className={classes.inputField} handleFieldChange={handleFieldChange} name={name} options={props.field.options} />
    } else {
      return <OneTextField defaultValue={defaultValue} className={classes.inputField} handleFieldChange={handleFieldChange} name={name} />
    }
  };

  if (UserCustomFields[name] !== undefined) {
    return (
      <>
        <ListItem>
          <ListItemIcon>
            {getButton(type)}
          </ListItemIcon>
          <ListItemText primary={label} />
            {getField(type, UserCustomFields[name], name)}
            <IconButton aria-label="delete" color="primary" onClick={() => handleClickDeletion(name)}>
                <DeleteIcon />
            </IconButton>
        </ListItem>
        <Divider/>
      </>
    );
  } else {
    return (
      <>
        <ListItem>
          <ListItemIcon>
          {getButton(type)}
          </ListItemIcon>
          <ListItemText primary={label} />
          <List component="div" disablePadding>
            <IconButton aria-label="add" color="primary" onClick={() => handleClickCreation(name, type)}>
              <AddIcon />
            </IconButton>
          </List>
        </ListItem>
        <Divider/>
      </>
    );
  }

}