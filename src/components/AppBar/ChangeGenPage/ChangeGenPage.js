import React from 'react';
import { Button, ButtonGroup, makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        [theme.breakpoints.down("md")]: {
           flex: 1,
           margin: theme.spacing() / 2
        }
    }
}))
export default props => {
    const classes = useStyles();
    const gens = Array.from(Array(7), (generation, index) => 
        <Button key={index + "gen"}
        onClick={() => props.genClick(index)}
        selected={props.currentGen + 1 === index + 1}>{index + 1}</Button>
    )
    
    return(<div className={classes.root}><ButtonGroup variant="contained" color="secondary">{gens}</ButtonGroup></div>)
}