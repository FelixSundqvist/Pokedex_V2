import React from 'react';
import { Modal, Button } from '@material-ui/core';
import { useModalStyles, AllTypes } from '../../../containers/AddToTeamForm/AddToTeamForm';
import PkmnIcon from '../../UI/PkmnIcon/PkmnIcon';
import pkmnBall from '../../../assets/poke.png';
import pkmnBallSelected from '../../../assets/pokeSelected.png'

export default props => {
    const classes = useModalStyles();
    
    if(props.pokemon) {
        return(
            <Modal
                open={props.open}
                onClose={props.onClose}>
        
            <div className={classes.root}>
                <h1 className={classes.title}>{props.pokemon.name}</h1>
                <PkmnIcon name={props.pokemon.name} />
                <div>
                    <Button onClick={() => props.onClickChange("prev")}>Prev</Button>
                    <Button onClick={() => props.onClickChange("next")}>Next</Button>
                </div>
                <div>
                    {Array.from(Array(props.teamMembers), 
                        (pokemon, index) => index === props.pokemon.id 
                        ? <img src={pkmnBallSelected} alt="pkmn" /> 
                        : <img 
                            className={classes.hover}
                            onClick={() => props.onClickChange("set",  index)} 
                            src={pkmnBall} 
                            alt="pkmn" />
                        )}
                </div>
                <div>
                    <div className={classes.statsWrapper}>
                        <h2>Ability</h2>
                        {props.pokemon.ability}
                    </div>
                </div>

                <div>
                    <h2>Nature</h2>
                    <div className={classes.statsWrapper}>
                        {props.pokemon.nature.name}
                        <p>INC: {props.pokemon.nature.inc}<br/>DEC: {props.pokemon.nature.dec}</p> 
                    </div>
                </div>


                <div>
                    <h2>Moveset</h2>
                    <div className={classes.itemWrapper}>
                        {props.pokemon.moves.map(current => <div className={classes.move}>{current.move}
                    </div>)}</div>
                </div>
  
                <Button variant="contained" color="primary" onClick={() => {
                        props.removePkmn(props.pokemon.id)
                        props.onClose()
                        }}>Remove</Button>  
            </div>
            </Modal>
        )
    }else {
        return null;
    }

}