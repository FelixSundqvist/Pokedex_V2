import * as actionTypes from '../actions/actionTypes';

const initialState = {
    pokemons:[],
    pokemonTeam:[{
        IVs: [0, 0, 0, 0, 0, 0],
        ability: "friend-guard",
        id: 0,
        moves: [
            {move: "pound"},
            {move: "double-slap"},
            {move: "mega-punch"},
            {move: "fire-punch"}],
        name: "jigglypuff",
        nature: {name: "Adamant", inc: "attack", dec: "special-attack"},
        stats: [
            {base_stat: 20, effort: 0, stat: {name: "speed"}},
            {base_stat: 25, effort: 0, stat: {name: "special-defense"}},
            {base_stat: 45, effort: 0, stat: {name: "special-attack"}},
            {base_stat: 20, effort: 0, stat: {name: "defense"}},
            {base_stat: 45, effort: 0, stat: {name: "attack"}},
            {base_stat: 115, effort: 2, stat: {name: "hp"}},
        ],
        },
        {
            IVs: [0, 0, 0, 0, 0, 0],
            ability: "friend-guard",
            id: 1,
            moves: [
                {move: "pound"},
                {move: "double-slap"},
                {move: "mega-punch"},
                {move: "fire-punch"}],
            name: "zubat",
            nature: {name: "Adamant", inc: "attack", dec: "special-attack"},
            stats: [
                {base_stat: 20, effort: 0, stat: {name: "speed"}},
                {base_stat: 25, effort: 0, stat: {name: "special-defense"}},
                {base_stat: 45, effort: 0, stat: {name: "special-attack"}},
                {base_stat: 20, effort: 0, stat: {name: "defense"}},
                {base_stat: 45, effort: 0, stat: {name: "attack"}},
                {base_stat: 115, effort: 2, stat: {name: "hp"}},
            ],
        },
        {
            IVs: [0, 0, 0, 0, 0, 0],
            ability: "friend-guard",
            id: 2,
            moves: [
                {move: "pound"},
                {move: "double-slap"},
                {move: "mega-punch"},
                {move: "fire-punch"}],
            name: "ninetales",
            nature: {name: "Adamant", inc: "attack", dec: "special-attack"},
            stats: [
                {base_stat: 20, effort: 0, stat: {name: "speed"}},
                {base_stat: 25, effort: 0, stat: {name: "special-defense"}},
                {base_stat: 45, effort: 0, stat: {name: "special-attack"}},
                {base_stat: 20, effort: 0, stat: {name: "defense"}},
                {base_stat: 45, effort: 0, stat: {name: "attack"}},
                {base_stat: 115, effort: 2, stat: {name: "hp"}},
            ],
            }
    ],

    selectedGen: 0,
    selectedPokemonId: "",
    selectedPokemon: {},
    pokedexInfo: {},
    evolutionChain: {},
    isLoadingPokemons: false,
    isLoadingCurrent: false,
    fetchPokemonError: false,
    fetchCurrentPokemonError: false,
    fetchEvoChainError: false,
}
const newState = (oldState, newState) =>({
    ...oldState,
    ...newState
})
const fetchPkmnSuccess = (state, pokemons) => ({...state,
    isLoadingPokemons: false,
    pokemons:[
    ...pokemons, 
]})
const fetchPkmnFail = state => newState(state, {
    isLoadingPokemons: false,
    fetchPokemonError: true
})
const fetchCurrentPkmnSuccess = (state, action) => newState(state, {
    isLoadingCurrent: false,
    selectedPokemonId: action.selectedPokemonId,
    selectedPokemon: action.selectedPokemon,
    pokedexInfo: action.pokedexInfo,
    fetchCurrentPokemonError: false,
})

const fetchCurrentPkmnFail = (state, action) => newState(state, {
    isLoadingCurrent: false,
    fetchCurrentPokemonError: true,
})

const addToTeam = (state, addPokemon) => {
    if(state.pokemonTeam.length <= 6){
        return newState(state, {pokemonTeam: [...state.pokemonTeam, {...addPokemon, id: state.pokemonTeam.length} ]})
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



const reducer = (state = initialState, action) => {
    const updateState = newState.bind(null, state);
    
    switch(action.type){
        case(actionTypes.FETCH_PKMN_SUCCESS): 
            return fetchPkmnSuccess(state, action.pokemons);
        case(actionTypes.FETCH_PKMN_FAIL):
            return fetchPkmnFail(state);
        case(actionTypes.CHANGE_GEN):
            return updateState({selectedGen: action.selectedGen})
        case(actionTypes.FETCH_CURRENT_PKMN_SUCCESS):
            return fetchCurrentPkmnSuccess(state, action)
        case(actionTypes.FETCH_CURRENT_PKMN_FAIL):
            return fetchCurrentPkmnFail(state)
        case(actionTypes.LOADING_POKEMONS):
            return updateState({isLoadingPokemons:true})
        case(actionTypes.LOADING_CURRENT_PKMN):
            return updateState({isLoadingCurrent: true})
        case(actionTypes.FETCH_EVO_CHAIN_SUCCESS):
            return updateState({evolutionChain: action.evolutionChain})
        case(actionTypes.ADD_TO_TEAM):
            return addToTeam(state, action.addPokemon)
        case(actionTypes.REMOVE_FROM_TEAM):
            return removeFromTeam(state, action)
        case(actionTypes.CHANGE_TEAM_POSITION):
            return updateState({pokemonTeam: [...action.newTeam]})
        default:
            return state;
    }
}

export default reducer;