import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

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
const Abilities = ({ abilities, className }) => {

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
            <div className={className}>{allAbilities}</div>
        </>
    )
}

export default Abilities;