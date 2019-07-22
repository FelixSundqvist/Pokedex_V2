import React, { Suspense } from 'react';
import { makeStyles } from '@material-ui/core';
import { Route } from 'react-router-dom';
import Pokedex from '../../containers/Pokedex/Pokedex';
import CurrentPokemon from '../../containers/CurrentPokemon/CurrentPokemon';

const useStyles = makeStyles( theme => ({
    root: {
      width: "100vw",
      minHeight: "100vh",
      backgroundColor: theme.palette.background,
      display: "flex"
    }
}))

export default props => {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        
        <Route path="/" component={Pokedex} />
        <Suspense fallback={<h1>Loading</h1>}>
          <Route path="/id=:id" component={CurrentPokemon} />
        </Suspense>
    </div>
    )
}

