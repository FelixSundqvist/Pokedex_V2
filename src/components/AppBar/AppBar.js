import React, { useState, useCallback, useEffect } from 'react';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import AppBar from '@material-ui/core/AppBar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Toolbar, IconButton, Button } from '@material-ui/core';
import FileSave from 'file-saver';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import GenSelectors from './ChangeGenPage/ChangeGenPage';
import Pokeball from './Pokeball/Pokeball';
import PokemonTeam from '../../containers/PokemonTeam/PokemonTeam';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        top: 'auto',
        bottom: 0,
    },
    appBar: {
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            padding: theme.spacing()
        }
    },
    iconButton: {
        position: "fixed",
        right: 0,
        top: 0,
        margin: theme.spacing(),
        color: "white",
        "&:hover": {
            backgroundColor: theme.palette.primary.main
        }
    }
}))

export default ({pokemonTeam, changeGen, changeTeamOrder })=> {

    const [openPkmnSummary, setOpenPkmnSummary] = useState(false);
    const [showAppbar, setShowAppBar] = useState(true);
    const [selectedSummary, setSelectedSummary] = useState(null);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const movePokemon = useCallback((dragIndex, hoverIndex) => {
        const newPkmnTeam = [...pokemonTeam];
        newPkmnTeam[dragIndex] = {...pokemonTeam[hoverIndex], id: dragIndex}
        newPkmnTeam[hoverIndex] = {...pokemonTeam[dragIndex], id: hoverIndex}
        changeTeamOrder(newPkmnTeam); 

    }, [pokemonTeam, changeTeamOrder])

    const classes = useStyles();

    useEffect(() => {
        if(matches){
            setShowAppBar(false);
        }
    }, [matches])
  
    let blob = new Blob([JSON.stringify({ pokemonTeam: pokemonTeam })], {type: "application/json"})
    
    const pokeBallClick = (e, id) => {
        setOpenPkmnSummary(true)
        setSelectedSummary(pokemonTeam[id])
    }

    const pokeballs = Array.from(Array(6), (pokeball, id) => <Pokeball
        key={"pokeball"+id} 
        onClick={ (e) => pokeBallClick(e, id)}
        movePokemon={movePokemon}
        pokemonInformation={pokemonTeam[id] ? pokemonTeam[id] : null}    
        id={id}
         />
    )
    const pkmnSummary = openPkmnSummary ? <PokemonTeam 
            mode = "view"
            selectedSummary = {selectedSummary} 
            setSelectedSummary = {setSelectedSummary}
            open = {openPkmnSummary} 
            onClose = {() => setOpenPkmnSummary(false)} 
        /> : null;
        
    const icon = !showAppbar ? <MenuIcon /> : <ClearIcon />
    return (
        <>
            <IconButton 
                edge="start" 
                color="inherit" 
                className={classes.iconButton} 
                onClick={() => setShowAppBar(!showAppbar)}
            >
                {icon}
            </IconButton>
            
            <AppBar className={classes.root} style={{display: showAppbar ? "block" : "none"}} >
            {pkmnSummary}
                    <Toolbar className={classes.appBar}>
                        <GenSelectors genClick={changeGen} />
                        <DndProvider backend={HTML5Backend}>
                            <div style={{flex: 1}}>{pokeballs}</div>
                        </DndProvider>
                        <div>
                            <Button onClick={() => FileSave.saveAs(blob, `team${Date.now()}.json` )} >Download Team JSON</Button>
                        </div>
                    </Toolbar>
            </AppBar>
        </>
    )
}