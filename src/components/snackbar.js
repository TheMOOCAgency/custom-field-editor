import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars(props) {
    const message = props.snackData.message
    const severity = props.snackData.severity
    const open = props.open
    const setOpenSnack = props.setOpenSnack
    const classes = useStyles();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpenSnack(false);
    };

    return (
        <div className={classes.root}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
            {message}
            </Alert>
        </Snackbar>
        </div>
    );
}
