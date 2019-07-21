import React from 'react';
import { makeStyles } from '@material-ui/core';
import AppBar from '../AppBar/AppBar';

const useStyles = makeStyles( theme => ({
    root: {
      width: "100vw",
      minHeight: "100vh",
      backgroundColor: theme.palette.background
    }
}))

export default props => {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <AppBar />
    </div>
    )
}

