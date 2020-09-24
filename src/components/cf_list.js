import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListSubheader, List } from '@material-ui/core';
import CfOneItem from './cf_one_item';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Cf_list(props) {
    const micrositeFields = props.copyProps.field_configs
    const setCopyProps = props.setCopyProps
    const copyProps = props.copyProps
    const setCustomFieldModified = props.setCustomFieldModified
    const classes = useStyles();

    return (
        <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
            <ListSubheader component="div" id="nested-list-subheader">
            Custom fields editor
            </ListSubheader>
        }
        className={classes.root}
        >
            {micrositeFields.map((field, index) =>
                {
                    return <CfOneItem
                        key = {index}
                        field= {field}
                        setCopyProps = {setCopyProps}
                        copyProps = {copyProps}
                        setCustomFieldModified = { setCustomFieldModified }
                    />
                })
            }
        </List>
    );
}