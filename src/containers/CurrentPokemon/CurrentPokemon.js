import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import PokedexEntry from '../../components/PokedexEntry/PokedexEntry';
import * as actionTypes from '../../store/actions/actionTypes';
import { makeStyles } from '@material-ui/styles';
import Loading from '../../components/UI/Loading/Loading';
import ErrorHandler from '../../components/UI/ErrorHandler/ErrorHandler';
import AddToTeamForm from '../AddToTeamForm/AddToTeamForm';

const useStyles = makeStyles(theme => ({
    root:{
        position: "relative",
        flex: 1,
        maxHeight: "100vh",
        color: "white",
        overflow: "scroll",
        textTransform: "capitalize",
        padding: theme.spacing() * 4
    },
    wrapper: {
        [theme.breakpoints.down("sm")]: {
            maxHeight: "50vh",
        }
    }
 }))
const CurrentPokemon = React.memo((
    {
        addPokemonToTeam,
        selectedPokemon, 
        pokedexInfo,
        isLoadingCurrent,
        match,
        history,
        fetchSelectedPokemon,
        evoChain,
        fetchCurrentPokemonError
    }) => {
    const [open, setOpen] = React.useState(false);
    const fetch = useCallback(
        () => {
            fetchSelectedPokemon(match.params.id);
        },[match.params.id, fetchSelectedPokemon]
    )
    useEffect(() => { fetch() }, [fetch])
    const classes = useStyles();
 
    const handleClose = () => setOpen(false);
    const handleOnAddClick = () => setOpen(true);
    
    let pokemon = <Loading />;
    
    if(!isLoadingCurrent && !fetchCurrentPokemonError){
        pokemon = (
        <PokedexEntry 
            pokedexInfo={pokedexInfo} 
            selectedPokemon={selectedPokemon}
            evoChain={evoChain}
            onAddClick={handleOnAddClick}
            evolutionClick={(id) => history.push("/id="+id)} /> )
    }else if(fetchCurrentPokemonError){
        pokemon = <ErrorHandler error1 />
    }        
    const addToTeam = open 
    ? <AddToTeamForm 
        addPokemonToTeam={addPokemonToTeam}
        setOpen={setOpen}
        open={open} 
        onClose={handleClose} 
        pokemon={{...selectedPokemon, ...pokedexInfo, name: selectedPokemon.name}} />
    : null;

    return (
        <div className={classes.root}>
        {addToTeam}
        <div className={classes.wrapper}>
            {pokemon}
        </div>
        </div>
    )
});

const mapStateToProps = (state) => ({
    selectedPokemonId: state.selectedPokemonId,
    selectedPokemon: state.selectedPokemon,
    pokedexInfo: state.pokedexInfo,
    isLoadingCurrent: state.isLoadingCurrent,
    evoChain: state.evolutionChain,
    fetchCurrentPokemonError: state.fetchCurrentPokemonError
})

const mapDispatchToProps = (dispatch) => ({
    fetchSelectedPokemon: (id) => dispatch({type: actionTypes.FETCH_CURRENT_PKMN_START, id: id}),
    addPokemonToTeam: (pokemon) => dispatch({type: actionTypes.ADD_TO_TEAM, addPokemon: pokemon}),
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentPokemon);