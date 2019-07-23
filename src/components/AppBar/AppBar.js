import React, { useState, useCallback, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import GenSelectors from './ChangeGenPage/ChangeGenPage';
import Pokeball from './Pokeball/Pokeball';
import PokemonSummary from './PokemonSummary/PokemonSummary';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        top: 'auto',
        bottom: 0,
        [theme.breakpoints.down("md")]: {
            top: 0,
            bottom: "auto",
        }
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

    const [openPkmnSummary, setOpenPkmnSummary] = useState(false);
    const [selectedSummary, setSelectedSummary] = useState(null);
    const [showAppbar, setShowAppBar] = useState(true);

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    console.log(matches)
    const movePokemon = useCallback((dragIndex, hoverIndex) => {
        const newPkmnTeam = [...pokemonTeam];
        newPkmnTeam[dragIndex] = {...pokemonTeam[hoverIndex], id: dragIndex}
        newPkmnTeam[hoverIndex] = {...pokemonTeam[dragIndex], id: hoverIndex}
        changeTeamOrder(newPkmnTeam); 
    }, [pokemonTeam, changeTeamOrder])
    const classes = useStyles();

    const pokeBallClick = (e, id) => {
        setOpenPkmnSummary(true)
        setSelectedSummary(pokemonTeam[id])
    }

    const handleSummaryClose = () => {
        setOpenPkmnSummary(false)
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
        key={"pokeball"+id} 
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
            open = {openPkmnSummary} 
            onClose = {handleSummaryClose} 
            onClickChange = {onClickChange}
        />

    return (
        <AppBar className={classes.root} style={{display: matches ? "block" : "none"}} >
            {pkmnSummary}
                <Toolbar>
                    <GenSelectors genClick={changeGen}  />
                    <DndProvider backend={HTML5Backend}>
                        <div style={{flex: 1}}>{pokeballs}</div>
                    </DndProvider>
                </Toolbar>
        </AppBar>
    )
}