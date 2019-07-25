import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import { makeStyles } from '@material-ui/styles';
import CardList from '../../components/CardList/CardList';

const useStyles = makeStyles(theme => ({
    root: {
        flex: 1,
        maxHeight: "100vh",
        overflow: "scroll",
        backgroundColor: theme.palette.background,
        margin: theme.spacing() * 2
    },
    wrapper: {
        padding: theme.spacing() * 4,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            justifyContent: "center",
            maxHeight: "50vh",
        }
    }
}))
const Pokedex = React.memo(props => {
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
    
    return <div className={classes.root}><div className={classes.wrapper}>{pokemons}</div></div>
});

const mapStateToProps = (state) => ({
    pokemons: state.fetchReducer.pokemons,
    selectedGen: state.fetchReducer.selectedGen,
    selectedPokemonId: state.fetchReducer.selectedPokemonId,
    isLoadingCurrent: state.fetchReducer.isLoadingCurrent,
    fetchPokemonError: state.fetchReducer.fetchPokemonError
})

const mapDispatchToProps = (dispatch) => ({
    fetchAllPokemons: (selectedGen) => dispatch({type: actionTypes.FETCH_PKMN_START, selectedGen: selectedGen}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);