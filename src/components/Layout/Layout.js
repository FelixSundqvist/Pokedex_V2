import React from 'react';
import { makeStyles } from '@material-ui/core';
import Pokedex from '../../containers/Pokedex/Pokedex';

const useStyles = makeStyles( theme => ({
    root: {
      width: "100vw",
      minHeight: "100vh",
      backgroundColor: theme.palette.background,

    }
}))

export default props => {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <Pokedex />
    </div>
    )
}

