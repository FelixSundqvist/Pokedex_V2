import * as actionTypes from '../actions/actionTypes';
import { newState, calculateStats } from '../../utility';

const pokemonTeam = process.env.NODE_ENV  === "development" ? [
    {
        level: 100,
        id: 0,
        EVs: [0, 0, 0, 0, 0, 0],
        IVs: [0, 0, 0, 0, 0, 0],
        ability: "chlorophyll",
        calculatedStats: [
            {stat: "125", name: "speed"},
            {stat: "165", name: "special-defense"},
            {stat: "149", name: "special-attack"},
            {stat: "131", name: "defense"},
            {stat: "142", name: "attack"},
            {stat: "230", name: "hp"},
        ],
        moves:[
            {move: "swords-dance"},
            {move: "cut"},
            {move: "bind"},
            {move: "vine-whip"}
        ],
        name: "ivysaur",
        nature: {
            dec: "special-attack",
            inc: "attack",
            name: "Adamant"
        },
      
        stats:[
        {base_stat: 60, effort: 0, stat: {name: "speed"}},
        {base_stat: 80, effort: 1, stat: {name: "special-defense"}},
        {base_stat: 80, effort: 1, stat: {name: "special-attack"}},
        {base_stat: 63, effort: 0, stat: {name: "defense"}},
        {base_stat: 62, effort: 0, stat: {name: "attack"}},
        {base_stat: 60, effort: 0, stat: {name: "hp"}}]
    }
]: [];

const initialState = {
    pokemonTeam: pokemonTeam,
    editPokemon: {},
}
const addToTeam = (state, addPokemon) => {
   
    const calculatedStats = calculateStats(addPokemon)
    
    if(state.pokemonTeam.length <= 6){
        return newState(state, {pokemonTeam: [...state.pokemonTeam, {...addPokemon, id: state.pokemonTeam.length, calculatedStats: calculatedStats} ]})
    }else {
        return state
    }
}

const removeFromTeam = (state, action) => {
    return {
        ...state,
        pokemonTeam: [...state.pokemonTeam]
        .filter(currentPokemon => currentPokemon.id !== action.id)
    }
}

const editTeam = (state, action) => {

    const newTeam = [...state.pokemonTeam]
    newTeam.splice(action.index, 1, {...action.edited, id: action.index})
    return {
        ...state,
        pokemonTeam: newTeam
    }
}

const reducer = (state = initialState, action) => {
    const updateState = newState.bind(null, state);
    
    switch(action.type){
        case(actionTypes.ADD_TO_TEAM):
            return addToTeam(state, action.addPokemon)
        case(actionTypes.REMOVE_FROM_TEAM):
            return removeFromTeam(state, action)
        case(actionTypes.CHANGE_TEAM_POSITION):
            return updateState({pokemonTeam: [...action.newTeam]})
        case(actionTypes.EDIT_TEAM):
            return editTeam(state, action)
        default:
            return state;
    }
}

export default reducer