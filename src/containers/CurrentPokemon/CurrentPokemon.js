import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import PokedexEntry from '../../components/PokedexEntry/PokedexEntry';
import * as actionTypes from '../../store/actions/actionTypes';
import { makeStyles } from '@material-ui/styles';
import Loading from '../../components/UI/Loading/Loading';
import ErrorHandler from '../../components/UI/ErrorHandler/ErrorHandler';
import PokemonTeam from '../PokemonTeam/PokemonTeam';

const useStyles = makeStyles(theme => ({
    root:{
        position: "relative",
        flex: 1,
        maxHeight: "100vh",
        color: "white",
        overflow: "scroll",
        textTransform: "capitalize",
        padding: theme.spacing() * 4,
        backgroundColor: theme.palette.background,
        [theme.breakpoints.down("sm")]: {
            width: "100vw",
            margin: "0 auto",
        }
    },
    wrapper: {
        [theme.breakpoints.down("sm")]: {
            height: "50vh",
            maxHeight: "50vh",
        }
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
    const [open, setOpen] = React.useState(false);
    const fetch = useCallback(
        () => {
            fetchSelectedPokemon(match.params.id);
        },[match.params.id, fetchSelectedPokemon]
    )
    useEffect(() => { fetch() }, [fetch])
    const classes = useStyles();
    let addToTeam = open
    ? <PokemonTeam
            mode="add"
            setOpen={setOpen}
            open={open} 
            onClose={() => setOpen(false)} />
    : null;

    let pokemon = <Loading />;
    
    if(!isLoadingCurrent && !fetchCurrentPokemonError){

        pokemon = (
        <PokedexEntry 
            pokedexInfo={pokedexInfo} 
            selectedPokemon={selectedPokemon}
            evoChain={evoChain}
            onAddClick={() => setOpen(true)}
            onClick={(pokemon) => fetchSelectedPokemon(pokemon)}
            evolutionClick={(id) => history.push("/id="+id)}
        /> )
    
    }else if(fetchCurrentPokemonError){
        pokemon = <ErrorHandler error1 />
    }        

    return (
    <>
    {addToTeam}
        <div className={classes.root}>
            <div className={classes.wrapper}>
                {pokemon}
            </div>
        </div>
    
    </>
    )
});

const mapStateToProps = (state) => ({
    selectedPokemonId: state.fetchReducer.selectedPokemonId,
    selectedPokemon: state.fetchReducer.selectedPokemon,
    pokedexInfo: state.fetchReducer.pokedexInfo,
    isLoadingCurrent: state.fetchReducer.isLoadingCurrent,
    evoChain: state.fetchReducer.evolutionChain,
    fetchCurrentPokemonError: state.fetchReducer.fetchCurrentPokemonError
})

const mapDispatchToProps = (dispatch) => ({
    fetchSelectedPokemon: (id) => dispatch({type: actionTypes.FETCH_CURRENT_PKMN_START, id: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentPokemon);