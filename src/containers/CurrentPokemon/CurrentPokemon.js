import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import PokedexInfo from '../../components/PokedexInfo/PokedexInfo';
import * as actionTypes from '../../store/actions/actionTypes';
import { makeStyles } from '@material-ui/styles';

/* import AddToTeamForm from '../AddToTeamForm/AddToTeamForm';
 */

 const useStyles = makeStyles(theme => ({
     root:{
        minHeight: "100%",
        width: "100%",
        color: "white",
        textTransform: "capitalize",
     }
 }))
const CurrentPokemon = React.memo((
    {
        selectedPokemon, 
        pokedexInfo,
        isLoadingCurrent,
        match,
        history,
        fetchSelectedPokemon,
        evoChain,
        fetchCurrentPokemonError
    }) => {
    const [currentPkmn, setPkmn] = useState(null);

    const fetch = useCallback(
        () => {
            fetchSelectedPokemon(match.params.id);
        },[match.params.id, fetchSelectedPokemon]
    )
    
    useEffect(() => { fetch() }, [fetch])
    const classes = useStyles();
    let pokemon = null;
    //<Loading />
    /* addToTeam={(pokemon) => setPkmn(<AddToTeamForm setPkmn={setPkmn} pokemon={pokemon} />)} */
    if(!isLoadingCurrent && !fetchCurrentPokemonError){
        pokemon = <PokedexInfo 
            pokedexInfo={pokedexInfo} 
            selectedPokemon={selectedPokemon}
            evoChain={evoChain}
            evolutionClick={(id) => history.push("/id="+id)} /> 
    }else if(fetchCurrentPokemonError){
        pokemon = null
    }             
    
    return (
        <>
        {currentPkmn}
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
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentPokemon);