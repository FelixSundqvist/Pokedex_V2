import React, { useState, useEffect } from 'react';
import { Modal, Button } from '@material-ui/core';
import PkmnIcon from '../../../components/UI/PkmnIcon/PkmnIcon';
import pkmnBall from '../../../assets/poke.png';
import pkmnBallSelected from '../../../assets/pokeSelected.png'
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
        editTeam,

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

                <div className={classes.statsWrapper}>  
                    <div>
                        <h3>Level</h3>
                        <p>{pokemon.level}</p>
                        <h2>Ability</h2>
                        {pokemon.ability}
                        <h3>Nature</h3>
                        {pokemon.nature.name}

                        <h3>Stats</h3>

                        {pokemon.calculatedStats.map(stat => {
                            let color = null
                            if(pokemon.nature.inc === stat.name){
                                color = "green"
                            }else if(pokemon.nature.dec === stat.name){
                                color = "red"
                            }
                        return (
                            <div key={stat.name + stat.stat}>
                                <p style={{color: color}}>{stat.name} : {stat.stat}</p>
                            </div>)
                        }
                        )}

                        <h3>Moveset</h3>
                        <div className={classes.itemWrapper}>
                            {pokemon.moves.map(current => <div key={current.move} className={classes.move}>{current.move}</div>)}
                        </div>
                    </div>
                </div>
            <div>
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