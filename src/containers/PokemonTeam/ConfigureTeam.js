import React, { 
    useState, 
    useEffect, 
    useRef, 
    useCallback } from 'react';
    
import {
    Modal, 
    Button, 
    Slider, 
    Input, 
    Select, 
    InputLabel, 
    Table, 
    TableHead, 
    TableRow, 
    TableCell, 
    TableBody } from '@material-ui/core';

import { natures } from '../../utility/natures/natures';
import PkmnIcon from '../../components/UI/PkmnIcon/PkmnIcon';
import Types from '../../components/PokedexEntry/hidden/Types/Types';
import { calculateStats } from '../../utility';

const AllTypes = ({ types }) => {
    const typeWrapper = {
        margin: "16px auto",
        display: "flex",
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

const ConfigureTeam = React.memo(({ pokemon, configurePokemon, open, onClose, setOpen, classes, mode }) => {
    
    const [ pokemonMoves, setPokemonMoves ] = useState([
        {move: ""},
        {move: ""},
        {move: ""},
        {move: ""},
    ])
    const [pokeAbility, setPokeAbility] = useState("");
    const [selectedNature, setSelectedNature ] = useState("")

    const [movesWarning, setMovesWarning] = useState(false)
    const [EVWarning, setEVWarning] = useState(false)
    
    const [pokemonIV, setPokemonIV] = useState([0, 0, 0, 0, 0, 0])
    const [pokemonEV, setPokemonEV] = useState([0, 0, 0, 0, 0, 0])
    const [pokemonLevel, setPokemonLevel] = useState(100);

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
    
    const evCheck = useCallback(
        () => {
            const totalAllowed = 510;
            const total = pokemonEV.reduce((a, b) => a + b)
            
            return totalAllowed >= total;
        },
        [pokemonEV]
    )
    
    useEffect(() => {
        if(!evCheck()){
            setEVWarning(true)
        }else{
            setEVWarning(false)
        }
    }, [pokemonEV, evCheck])
    const sliderRef = useRef(null)

    const statsCalculated = calculateStats(
        {
            stats: pokemon.stats, 
            EVs: pokemonEV, 
            IVs: pokemonIV, 
            level: pokemonLevel, 
            nature: selectedNature 
        })
   
    const sliderValueCheck = (event, newValue, index) => {
        let newSliderValue = null
        
        if(typeof pokemonEV !== "number"){
            newSliderValue = [...pokemonEV] 
        }

        newSliderValue[index] = newValue
        return newSliderValue
    }
    const handleSliderChange = (event, newValue, index) => {
        sliderRef.current.focus()
        setPokemonEV(sliderValueCheck(event, newValue, index));
      };
    
      const handleInputChange = (event, index ) => {
          setPokemonEV(sliderValueCheck(event, Number(event.target.value), index));
        }

      const handleBlur = (e, index) => {
        if (pokemonEV[index] < 0) {
          setPokemonEV(0);
        } else if (pokemonEV[index] > 255) {
          setPokemonEV(255);
        }
    };
    
    const changeMove = (e, id) => {
        e.preventDefault();
        const pokemonMoveCopy = [...pokemonMoves]
        const test = pokemonMoveCopy.map((c, index) => id !== index ? e.target.value === c.move : false)
        
        if(test.some(id => id === true)){
            pokemonMoveCopy[id].move = pokemonMoves[id].move;
            return setMovesWarning(true)
        }else{
            setMovesWarning(false)
            pokemonMoveCopy[id].move = e.target.value
            setPokemonMoves(pokemonMoveCopy)
        }
    }
    const setValue = (value, func) => func(value)

    const ivs =  Array.from(Array(32), ((cur, index) => <option key={index} value={index}>{index}</option>))
    const statTableBody = pokemon.stats.map((stat, index) =>
        <TableRow key={stat.stat.name+index+stat.base_stat}>
            <TableCell>{stat.stat.name}</TableCell>
            <TableCell>{stat.base_stat}</TableCell>
            <TableCell>{pokemonIV[index]}</TableCell>
            <TableCell>{pokemonEV[index]}</TableCell>
            <TableCell>{statsCalculated[index].stat}</TableCell>
        </TableRow>
    )
    const editStats = pokemon.stats.map((stat, index ) => 
        <div key={stat.stat.name} style={{display: "flex", padding: "16px"}}>
            <div className={classes.editStats}>
                <div style={{flex: 4}}>
                    <InputLabel>{stat.stat.name}</InputLabel>
                    <Slider
                        className={classes.slider}
                        id={index}
                        ref={sliderRef}
                        onChange={(event, value) => handleSliderChange(event, value, index)}
                        value={typeof pokemonEV[index] === 'number' ? pokemonEV[index] : 0}
                        defaultValue={0}
                        max={255}
                        aria-labelledby="slider"
                    /> 
                </div>
                <div style={{margin: "8px"}}>
                    <InputLabel>EV's</InputLabel>
                    <Input
                        className={classes.input}
                        value={pokemonEV[index]}
                        onChange={(e) => handleInputChange(e, index)}
                        onBlur={(e) => handleBlur(e, index)}
                        inputProps={{
                        min: 0,
                        max: 255,
                        type: 'number',
                        }} />
                </div>
            </div>
        
            <div style={{margin: "8px"}}>
                <InputLabel>IV's</InputLabel>
                <Select 
                    className={classes.changeStats} 
                    value={pokemonIV[index]}
                    native
                    variant='filled' 
                    onChange={(e) => {
                        const ivs = [...pokemonIV];
                        ivs[index] = +e.target.value;
                        setPokemonIV(ivs)}
                    }>
                    {ivs}
                </Select>
            </div>
    </div>);


    const moves = Array.from(Array(4), (cur, id) => 
        <div className={classes.move} key={id + "move"}> 
            <Select 
                value={pokemonMoves[id].move} 
                onChange={e => changeMove(e, id)}
                native
                variant='filled' 
                >
                { 
                    pokemon.moves.map(cur => 
                        <option key={cur.move.name} value={cur.move.name}>{cur.move.name}</option>)
                }
            </Select>
        </div>
    )

    const natureOptions =(
    <div className={classes.itemWrapper} style={{display: "block"}}> 
        <Select
            className={classes.select} 
            value={selectedNature.name}
            native
            variant='filled' 
            onChange={e => setValue(natures.filter(current => current.name === e.target.value)[0], setSelectedNature)}
            >{natures.map(cur => 
                <option key={cur.name} value={cur.name}>{cur.name}</option>
            )}
        </Select>
        <div>
            Increase: <p style={{color: "green"}}>{selectedNature.inc} </p>
            Decrease: <p style={{color: "red"}}>{selectedNature.dec} </p>
        </div>
    </div>)

    const abilities =( 
    <div className={classes.itemWrapper} >
        <Select 
            native
            variant='filled' 
            className={classes.select} 
            value={pokeAbility} 
            onChange={e => setValue(e.target.value, setPokeAbility)}>
                {pokemon.abilities.map(cur => <option value={cur.ability.name} key={cur.ability.name}>{cur.ability.name}</option>)}
        </Select>
    </div>)

    const config = () => {
        setOpen(false)
        setEVWarning(false)
        configurePokemon(
            {
                name: pokemon.name,
                level: pokemonLevel,
                moves: pokemonMoves, 
                ability: pokeAbility, 
                stats: pokemon.stats, 
                nature: selectedNature,
                IVs: pokemonIV,
                EVs: pokemonEV
            }
        )
    }
    
    return (
        <Modal
            open={open}
            onClose={onClose}>
            <div className={classes.root}>
                
                <PkmnIcon name={pokemon.name} />
                <h1 className={classes.title}>{pokemon.name}</h1>

                <AllTypes types={pokemon.types} />
                <div onChange={e => e.preventDefault()}>

                <h2>Stats</h2>
                <div className={classes.statsWrapper} style={{border: EVWarning ? "2px solid red" : null}} >
                   
                    <div className={classes.select}>
                        <InputLabel>Level</InputLabel>
                        <Input 
                            onChange={(e) => {
                                setPokemonLevel(+e.target.value)
                                if(+e.target.value > 100 || e.target.value < 0){
                                    setPokemonLevel(100)
                                }
                            }} 
                            value={pokemonLevel}
                            max={100}
                            min={1}
                        />
                    </div>
                    <div>{EVWarning ? <h2 style={{color: "red"}} >EV Total may not exceed 510</h2> : null}</div>
                        {editStats}
                    
                    <Table style={{flex: 1}}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Stat: </TableCell>
                                <TableCell>Base: </TableCell>
                                <TableCell>IV's</TableCell>
                                <TableCell>EV's</TableCell>
                                <TableCell>TOTAL</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {statTableBody}
                        </TableBody>
                        
                    </Table>
                </div>
                <h2>Ability</h2>
                {abilities}
                <h2>Nature</h2>
                {natureOptions}
                
                
                {!movesWarning ? <h2>Moves</h2> : <h2 style={{color: "red"}}>Please select only one of each move</h2>}
                <div className={classes.itemWrapper} style={{border: movesWarning ? "2px solid red" : null}}>
                    {moves}
                </div>
                    {mode === "add" 
                        ? <Button disabled={EVWarning || movesWarning} variant="contained" onClick={() => config()}>Add</Button>
                        : <Button disabled={EVWarning || movesWarning} variant="contained" onClick={() => {config(); onClose()}}>Done</Button>
                    }
                </div>
            </div>
        </Modal>)
})

export default ConfigureTeam