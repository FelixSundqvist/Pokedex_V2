import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import * as actionTypes from '../../store/actions/actionTypes';
import AddToTeam from './HandleTeam/ConfigureTeam';
import ViewTeam from './HandleTeam/ViewTeam'
const useModalStyles = makeStyles(theme => ({
    root: {
        height: "100%",
        maxWidth: "80vw",
        backgroundColor: "white", 
        overflow: "scroll",
        textAlign: "center",
        padding: theme.spacing() * 4,
        margin: `${theme.spacing() * 2}px auto`,
    }, 
    itemWrapper: {
        width: "90%",
        height: "auto",
        padding: theme.spacing() * 2,
        margin: "16px auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        boxShadow: theme.shadows[2],
    },
    statsWrapper: {
        width: "90%",
        margin: "0 auto",
        padding: theme.spacing() * 2,
        alignItems: "center",
        justifyContent: "center",
        boxShadow: theme.shadows[2],
    },
    move:{
        borderRadius: "1vh",
        flex: "0 0 40%",
        boxShadow: theme.shadows[0],
        padding: "16px",
        margin: "8px",
        textTransform: "capitalize",
    },
    title: {
        textTransform: "capitalize"
    },
    select: {
        padding: theme.spacing(),
        margin: theme.spacing() * 2
    },
    editStats: {
        display: "flex",
        width: "100%",
        flexDirection: "row"
    },
    slider: {
        margin: theme.spacing(),
        width: "80%"
    },
    stats: {
        padding: theme.spacing(),
        width: "100%",
        textAlign: "left",
    },
    changeStats: {
        display: "block",
        flex: 1,
        justifySelf: "flex-end",
        alignSelf: "flex-end"
    },
    hover: {
        "&:hover":{
            cursor: "pointer"
        }
    },
    button:{
        margin: theme.spacing()
    }
}))
const PokemonTeam = React.memo((props) => {
    
    const classes = useModalStyles();

    if((props.mode === "add" || props.mode ==="edit") && props.selectedPokemon.name){
        return (
            <AddToTeam
                mode = {props.mode}
                classes={classes}
                configurePokemon = {props.mode === "add" ? props.addPokemonToTeam : props.configurePokemon}
                setOpen={props.setOpen}
                open={props.open} 
                onClose={props.onClose} 
                pokemon={{...props.selectedPokemon, ...props.pokedexInfo, name: props.selectedPokemon.name}} />
        )
    }else if(props.mode === "view"){
        if(!props.selectedSummary) return null
        
        const onClickChange = (direction, id) => {

            if(direction === "prev" && props.selectedSummary.id > 0){
                props.setSelectedSummary(props.pokemonTeam[props.selectedSummary.id - 1])
            }else if(direction === "next" && props.selectedSummary.id < 6){
                props.setSelectedSummary(props.pokemonTeam[props.selectedSummary.id + 1])
            }else if(direction === "set"){
                props.setSelectedSummary(props.pokemonTeam[id])
            }

        }
        return (
            <ViewTeam 
                fetchEditPkmn = {props.fetchEditPkmn}
                editPokemon = {props.editPokemon}
                editTeam = {props.editTeam}
                classes = {classes}
                teamMembers = {props.pokemonTeam.length}
                removePkmn = {props.removePkmnFromTeam}
                pokemon = {props.selectedSummary} 
                open = {props.open} 
                onClose = {props.onClose} 
                onClickChange = {onClickChange} />
        )
    }
    else{
        return null
    }
    
})

const mapStateToProps = state => ({
    pokemonTeam: state.teamReducer.pokemonTeam,
    currentGen: state.fetchReducer.selectedGen,
    selectedPokemon: state.fetchReducer.selectedPokemon,
    pokedexInfo: state.fetchReducer.pokedexInfo,
    editPokemon: state.fetchReducer.editPokemon
})
  
const mapDispatchToProps = dispatch => ({
    genClick: (gen) => dispatch({ type: actionTypes.CHANGE_GEN, selectedGen: gen }),
    addPokemonToTeam: (pokemon) => dispatch({type: actionTypes.ADD_TO_TEAM, addPokemon: pokemon}),
    changeTeamOrder: (newTeam) => dispatch({type: actionTypes.CHANGE_TEAM_POSITION, newTeam: newTeam}),
    removePkmnFromTeam: (id) => dispatch({type: actionTypes.REMOVE_FROM_TEAM, id: id}),
    fetchEditPkmn: (id) => dispatch({type: actionTypes.FETCH_EDIT_PKMN_START, id: id}),
    editTeam: (edited, index) => dispatch({type: actionTypes.EDIT_TEAM, edited: edited, index: index}),

})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonTeam)