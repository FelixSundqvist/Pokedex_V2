import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Modal, Button } from '@material-ui/core';
import { natures } from '../../utility/natures/natures';
import PkmnIcon from '../../components/UI/PkmnIcon/PkmnIcon';
import Types from '../../components/PokedexEntry/hidden/Types/Types';

export const useModalStyles = makeStyles(theme => ({
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
        boxShadow: "2px 2px 4px 2px #ccc",
    },
    statsWrapper: {
        width: "90%",
        margin: "0 auto",
        padding: theme.spacing() * 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "2px 2px 4px 2px #ccc",
    },
    move:{
        borderRadius: "1vh",
        flex: "0 0 40%",
        border: "2px solid black",
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
    stats: {
        padding: theme.spacing(),
        width: "100%",
        textAlign: "left",
        display: "flex",
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
    }
}))

export const AllTypes = ({types}) => {
    const typeWrapper = {
        margin: "16px auto"
    }
    return(
        <div className={typeWrapper} >
            {
                types
                .map(cur => <Types key={cur.type.name} type={cur.type.name} />)
                .reverse()
            }
        </div>
        )
}

const AddToTeamForm = ({ pokemon, addPokemonToTeam, open, onClose, setOpen }) => {
    const [ pokemonMoves, setPokemonMoves ] = useState([
        {move: ""},
        {move: ""},
        {move: ""},
        {move: ""},
    ])
    const [pokeAbility, setPokeAbility] = useState("");
    const [selectedNature, setSelectedNature ] = useState("")
    const [warning, setWarning] = useState(null)
    const [pokemonIV, setPokemonIV] = useState([0, 0, 0, 0, 0, 0])

    useEffect(() => {
        setPokemonMoves([
            {move: pokemon.moves[0].move.name},
            {move: pokemon.moves[1].move.name},
            {move: pokemon.moves[2].move.name},
            {move: pokemon.moves[3].move.name},
        ])

        setPokeAbility(pokemon.abilities[0].ability.name);
        setSelectedNature(natures[0])
    }, [pokemon.abilities, pokemon.moves])
    
    const classes = useModalStyles();

    const changeMove = (e, id) => {
        e.preventDefault();
        const pokemonMoveCopy = [...pokemonMoves]
        const test = pokemonMoveCopy.map((c, index) => id !== index ? e.target.value === c.move : false)
        
        if(test.some(id => id === true)){
            pokemonMoveCopy[id].move = pokemonMoves[id].move;
            return setWarning(<h2 style={{color: "red"}}>Please select only one of each move</h2>)
        }else{
            setWarning(null)
            pokemonMoveCopy[id].move = e.target.value
            setPokemonMoves(pokemonMoveCopy)
        }
    }
    const setValue = (value, func) => func(value)
    const ivs =  Array.from(Array(32), ((cur, index) => <option key={index} value={index}>{index}</option>))
    const stats = pokemon.stats.map((stat, index )=> 

        <div key={stat.stat.name} className={classes.stats}>
        <div style={{flex: 1}}>{stat.stat.name}: {stat.base_stat} + {pokemonIV[index]}</div>
        <select className={classes.changeStats} value={pokemonIV[index]} onChange={(e) => {
                const ivs = [...pokemonIV];
                ivs[index] = e.target.value;
                setPokemonIV(ivs)
        }}>
            {ivs}
        </select>
        
        </div>);


    const moves = Array.from(Array(4), (cur, id) => 
        <div className={classes.move} key={id + "move"}> 
            <select value={pokemonMoves[id].move} onChange={e => changeMove(e, id)}>
                { 
                    pokemon.moves.map(cur => 
                        <option key={cur.move.name} value={cur.move.name}>{cur.move.name}</option>)
                }
            </select>
        </div>
    )

    const natureOptions =(
    <div className={classes.itemWrapper} style={{display: "block"}}> 
        <select
            className={classes.select} 
            value={selectedNature.name}
            onChange={e => setValue(natures.filter(current => current.name === e.target.value)[0], setSelectedNature)}
            >{natures.map(cur => 
                <option key={cur.name} value={cur.name}>{cur.name}</option>
            )}
        </select>
        <div>
            Increase: <p style={{color: "green"}}>{selectedNature.inc} </p>
            Decrease: <p style={{color: "red"}}>{selectedNature.dec} </p>
        </div>
    </div>)

    const abilities =( 
    <div className={classes.itemWrapper} >
        <select 
            className={classes.select} 
            value={pokeAbility} 
            onChange={e => setValue(e.target.value, setPokeAbility)}>
                {pokemon.abilities.map(cur => <option value={cur.ability.name} key={cur.ability.name}>{cur.ability.name}</option>)}
        </select>
    </div>)

    const submit = (pokemonMoves) => {
        setOpen(false)

        addPokemonToTeam(
            {
                name: pokemon.name, 
                moves: pokemonMoves, 
                ability: pokeAbility, 
                stats: pokemon.stats, 
                nature: selectedNature,
                IVs: pokemonIV
            }
        )
    }

return (
    <>
    <Modal
        open={open}
        onClose={onClose}>
        <div className={classes.root}>
            <h1 className={classes.title}>{pokemon.name}</h1>
            <PkmnIcon name={pokemon.name} />
            <AllTypes types={pokemon.types} />
            <div onChange={e => e.preventDefault()}>
            <h2>Stats</h2>
            <div className={classes.statsWrapper} >
                {stats}
            </div>

            <h2>Ability</h2>
            {abilities}
            <h2>Nature</h2>
            {natureOptions}
            
            {warning}
            <h2>Moves</h2>
            <div className={classes.itemWrapper}>
                {moves}
            </div>
                <Button variant="contained" onClick={() => submit(pokemonMoves)}>Add</Button>
            </div>
        </div>
    </Modal>
    </>)


}

export default AddToTeamForm;