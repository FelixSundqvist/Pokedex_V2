import React, { useState, useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import { makeStyles } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';
import GenSelectors from './ChangeGenPage/ChangeGenPage';
import Pokeball from './Pokeball/Pokeball';
import PokemonSummary from './PokemonSummary/PokemonSummary';

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

export default ({pokemonTeam, changeGen, removePkmn, changeTeamOrder })=> {

    const [open, setOpen] = useState(false);
    const [selectedSummary, setSelectedSummary] = useState(null);
    const movePokemon = useCallback((dragIndex, hoverIndex) => {
        const newPkmnTeam = [...pokemonTeam];
        newPkmnTeam[dragIndex] = {...pokemonTeam[hoverIndex], id: dragIndex}
        newPkmnTeam[hoverIndex] = {...pokemonTeam[dragIndex], id: hoverIndex}
        changeTeamOrder(newPkmnTeam); 
    }, [pokemonTeam, changeTeamOrder])
    const classes = useStyles();

    const pokeBallClick = (e, id) => {
        setOpen(true)
        setSelectedSummary(pokemonTeam[id])
    }

    const handleSummaryClose = () => {
        setOpen(false)
    }
    const onClickChange = (direction, id) => {
        if(direction === "prev" && selectedSummary.id > 0){
            setSelectedSummary(pokemonTeam[selectedSummary.id - 1])
        }else if(direction === "next" && selectedSummary.id < 6){
            setSelectedSummary(pokemonTeam[selectedSummary.id + 1])
        }else if(direction === "set"){

            setSelectedSummary(pokemonTeam[id])
        }
    }
    const pokeballs = Array.from(Array(6), (pokeball, id) => <Pokeball 
        onClick={ (e) => pokeBallClick(e, id)}
        movePokemon={movePokemon}
        pokemonInformation={pokemonTeam[id] ? pokemonTeam[id] : null}    
        id={id}
         />
    )
    const pkmnSummary =  <PokemonSummary 
            teamMembers = {pokemonTeam.length}
            removePkmn = {removePkmn}
            pokemon = {selectedSummary} 
            open = {open} 
            onClose = {handleSummaryClose} 
            onClickChange = {onClickChange}
        />

    return (
        <AppBar className={classes.root}>
            {pkmnSummary}
            
                <Toolbar>
                    <GenSelectors genClick={changeGen}  />
                    <DndProvider backend={HTML5Backend}>
                        <div style={{flex: 1, padding: "8px"}}> <p>Team:</p> {pokeballs}</div>
                    </DndProvider>
                </Toolbar>
            
        </AppBar>
    )
}