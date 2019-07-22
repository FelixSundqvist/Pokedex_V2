import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import { makeStyles } from '@material-ui/styles';
import CardList from '../../components/CardList/CardList';


const useStyles = makeStyles(theme => ({
    root: {
        flex:"1",
        height: "100%",
        display: "flex",
        overflow: "scroll",
        flexWrap: "wrap",
        alignItems: "center",
        padding: theme.spacing() * 4,
        margin: theme.spacing() * 2
    }
}))
const Pokedex = props => {
    const { fetchAllPokemons, selectedGen  } = props;
    
    useEffect(() => {
        fetchAllPokemons(selectedGen)
    }, [selectedGen, fetchAllPokemons])
    
    const classes = useStyles();
    const changePage = (event, id) => props.history.push("/id="+id)

    const pokemons = !props.isLoading && !props.fetchPokemonError
    ?   <CardList 
            onClick={changePage}
            selected={props.selectedPokemonId}
            items = {props.pokemons} /> 
    : null;
    
    
    return <div className={classes.root}>{pokemons}</div>
}
const mapStateToProps = (state) => ({
    pokemons: state.pokemons,
    selectedGen: state.selectedGen,
    selectedPokemonId: state.selectedPokemonId,
    isLoadingCurrent: state.isLoadingCurrent,
    fetchPokemonError: state.fetchPokemonError
})
const mapDispatchToProps = (dispatch) => ({
    fetchAllPokemons: (selectedGen) => dispatch({type: actionTypes.FETCH_PKMN_START, selectedGen: selectedGen}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);