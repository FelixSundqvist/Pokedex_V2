import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import PokedexInfo from '../../components/PokedexInfo/PokedexInfo';
import * as actionTypes from '../../store/actions/actionTypes';
import { makeStyles } from '@material-ui/styles';
import Loading from '../../components/UI/Loading/Loading';
import ErrorHandler from '../../components/UI/ErrorHandler/ErrorHandler';
import AddToTeamForm from '../../components/AddToTeamForm/AddToTeamForm';

const useStyles = makeStyles(theme => ({
     root:{
        position: "relative",
        minHeight: "100%",
        flex: 1,
        color: "white",
        textTransform: "capitalize",
        padding: theme.spacing() * 4
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
        <PokedexInfo 
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
        <>
        {addToTeam}
        <div className={classes.root}> 
            {pokemon}
        </div>
        </>
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