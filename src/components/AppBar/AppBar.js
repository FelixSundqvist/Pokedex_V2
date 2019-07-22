import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GenSelectors from './GenSelectors/GenSelectors';
import Pokeballs from './Pokeballs/Pokeballs';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        flexGrow: 1,
        top: 'auto',
        bottom: 0,
    },
    iconButton: {
        position: "fixed",
        right: 0,
        bottom: 0,
        margin: theme.spacing(),
        border: "2px solid white",
        backgroundColor: theme.palette.secondary.main,
        color: "white",
        "&:hover": {
            backgroundColor: theme.palette.primary.main
        }
    }
}))

export default props => {
    const [show, setShow] = useState(true);
    const classes = useStyles();
    const appBar = show 
    ? <AppBar className={classes.root}>
            <Toolbar>
                <GenSelectors />
                <Pokeballs />
            </Toolbar>
        </AppBar>
    : null;
    
    const iconButton = !show ? <IconButton onClick={() => setShow(true)} edge="start" className={classes.iconButton}><MenuIcon /></IconButton> : null;

    return (
        <>{appBar}{iconButton}</>
    )
}