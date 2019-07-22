import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid white"
    },
    abilities:{
        padding: theme.spacing() * 2,
        backgroundColor: theme.palette.secondary,
        margin: theme.spacing(),
    },
    hiddenAbility: {
        padding: theme.spacing() * 2,
        backgroundColor: theme.palette.secondary,
        opacity: 0.3,
        margin:theme.spacing()
    }
}))
const Abilities = ({ abilities, theme }) => {

    const classes = useStyles();

    const allAbilities = abilities
        .map(cur => !cur.is_hidden 
            ? <div className={classes.abilities} key={cur.ability.name}>{cur.ability.name}</div> 
            :<React.Fragment key={cur.ability.name}>
                <p>Hidden: </p>
                <div className={classes.hiddenAbility}>{cur.ability.name}</div>
            </React.Fragment>)
        .reverse()

    return (
        <>
            <h2>Abilities</h2>
            <div className={classes.root}>{allAbilities}</div>
        </>
    )
}

export default Abilities;