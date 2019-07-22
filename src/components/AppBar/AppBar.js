import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
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

export default props => {

    const [open, setOpen] = useState(false);
    const [selectedSummary, setSelectedSummary] = useState(null);

    const classes = useStyles();

    const pokeBallClick = (e, id) => {
        setOpen(true)
        setSelectedSummary(props.pokemonTeam[id])
    }

    const handleSummaryClose = () => {
        setOpen(false)
    }
    const onClickChange = (direction, id) => {
        if(direction === "prev" && selectedSummary.id > 0){
            setSelectedSummary(props.pokemonTeam[selectedSummary.id - 1])
        }else if(direction === "next" && selectedSummary.id < 6){
            setSelectedSummary(props.pokemonTeam[selectedSummary.id + 1])
        }else if(direction === "set" && id){
            setSelectedSummary(props.pokemonTeam[id])
        }
    }
    const pokeballs = Array.from(Array(6), (pokeball, id) => <Pokeball 
        onClick={ (e) => pokeBallClick(e, id)}
        pokemonInformation={props.pokemonTeam[id] ? props.pokemonTeam[id] : null}    
        id={id}
         />
    )
    const pkmnSummary =  <PokemonSummary 
            teamMembers = {props.pokemonTeam.length}
            removePkmn = { props.removePkmn}
            pokemon = {selectedSummary} 
            open = {open} 
            onClose = {handleSummaryClose} 
            onClickChange = {onClickChange}
        />

    return (
        <AppBar className={classes.root}>
            {pkmnSummary}
            
                <Toolbar>
                    <GenSelectors genClick={props.changeGen}  />
                    <div style={{flex: 1}}>{pokeballs}</div>
                </Toolbar>
            
        </AppBar>
    )
}