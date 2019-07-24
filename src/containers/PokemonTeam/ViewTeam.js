import React, { useState, useEffect } from 'react';
import { Modal, Button } from '@material-ui/core';
import PkmnIcon from '../../components/UI/PkmnIcon/PkmnIcon';
import pkmnBall from '../../assets/poke.png';
import pkmnBallSelected from '../../assets/pokeSelected.png'
import ConfigureTeam from './ConfigureTeam'
export default (
    {
        pokemon, 
        open, 
        onClose, 
        onClickChange, 
        removePkmn, 
        teamMembers, 
        fetchEditPkmn, 
        classes,
        editPokemon,
        editTeam
    }) => {
    const [showEdit, setShowEdit] = useState(false)
    
    useEffect(() => {
        fetchEditPkmn(pokemon.name)
    }, [pokemon, fetchEditPkmn])


    if(!pokemon) return null
    
    let editModal = showEdit && editPokemon
        ? <ConfigureTeam
            mode="edit"
            classes={classes}
            configurePokemon={(edited) => editTeam(edited, pokemon.id)}
            setOpen={setShowEdit}
            open={showEdit} 
            onClose={onClose} 
            pokemon={editPokemon} />
        : null; 
        
    return(
        <>
        {editModal}
        <Modal
            open={open}
            onClose={onClose}>
    
        <div className={classes.root}>
            <h1 className={classes.title}>{pokemon.name}</h1>
            <PkmnIcon name={pokemon.name} />
            <div>
                <Button onClick={() => onClickChange("prev")}>Prev</Button>
                <Button onClick={() => onClickChange("next")}>Next</Button>
            </div>
            
          <div>
                {Array.from(Array(teamMembers), 
                    (pkmn, index) => index === pokemon.id 
                    ? <img 
                        key={pokemon.name + index}
                        src={pkmnBallSelected} alt="pkmn" /> 
                    : <img 
                        key={pokemon.name + index}
                        className={classes.hover}
                        onClick={() => onClickChange("set",  index)} 
                        src={pkmnBall} 
                        alt="pkmn" />
                    )}
            </div>
            <div>
                <div className={classes.statsWrapper}>
                    <h2>Ability</h2>
                    {pokemon.ability}
                </div>
            </div>

            <div>
                <h2>Nature</h2>
                <div className={classes.statsWrapper}>
                    {pokemon.nature.name}
                    <p>INC: {pokemon.nature.inc}<br/>DEC: {pokemon.nature.dec}</p> 
                </div>
            </div>

            <div>
                <h2>Moveset</h2>
                <div className={classes.itemWrapper}>
                    {pokemon.moves.map(current => <div key={current.move} className={classes.move}>{current.move}
                </div>)}</div>
            </div>
            <Button variant="contained" color="secondary" className={classes.button} onClick={() => {
                setShowEdit(true)
                
            }}>Edit</Button> 

            <Button variant="contained" color="primary" className={classes.button} onClick={() => {
                removePkmn(pokemon.id)
                onClose()
            }}>Remove</Button>

        </div>
        </Modal>
    </>
    )
    
}