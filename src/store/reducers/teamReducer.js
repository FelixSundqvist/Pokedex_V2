import * as actionTypes from '../actions/actionTypes';
import { newState } from '../../utility';

const pokemonTeam = process.env.NODE_ENV  === "development" ? [
    {
        level: 100,
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
const calculateStats = (pokemon) => {
    const { stats, EVs, IVs, level, nature } = pokemon
    return stats
    .map(stat => ({baseStat: stat.base_stat, name: stat.stat.name}))
    .map((stat, index) => {
        let calculated = 0;

        if(stat.name === "hp"){
            calculated = pokemon.name !== "shedinja" ? Math.round(((2 * stat.baseStat + IVs[index] + (EVs[index] / 4)) * level) / 100 + level + 10) : 1
        }else{
            let natureFactor = 1;
            if(nature.inc === stat.name){
                natureFactor = 1.1
            }else if(nature.dec === stat.name){
                natureFactor = 0.9
            }
            calculated = ((((2 * stat.baseStat + IVs[index] + (EVs[index] / 4) )* level) / 100) + 5) * natureFactor
        }
        return {
            stat: calculated.toFixed(0),
            name: stat.name
        }
    })

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