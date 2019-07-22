import React from 'react';
import { ButtonBase, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root:{
        flex: "1"
    },
    button: {
        borderRadius: "50%",
        height: "40px",
        width: "40px",
        color: "black",
        backgroundColor: "white",
        margin: theme.spacing()
    }
}))

export default props => {
    const classes = useStyles();

    const pokeballs = Array.from(Array(6), (generation, index) => 
        <ButtonBase key={`pokeball: ${index}`} edge="end" variant="contained" color="white" className={classes.button}></ButtonBase>)
    
    return(<div className={classes.root}>{pokeballs}</div>)
}