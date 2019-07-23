import React from 'react';
import { ButtonBase, makeStyles } from '@material-ui/core';
import PkmnIconDraggable from '../../UI/PkmnIcon/PkmnIconDraggable';

const Pokeball = props => {

    const classes = makeStyles(theme => ({
        root:{
            flex: "1"
        },
        button: {
            borderRadius: "50%",
            height: "40px",
            width: "40px",
            color: "black",
            backgroundColor: "white",
            margin: theme.spacing(),
            [theme.breakpoints.down("md")]: {
                margin: theme.spacing() / 2,
            }
        }
    }))()

    return (
            
        <ButtonBase 
            onClick={props.onClick}
            disabled={!props.pokemonInformation}
            edge="end" 
            variant="contained" 
            color="white" 
            className={classes.button}>{
            props.pokemonInformation 
            ? <PkmnIconDraggable  movePokemon={props.movePokemon} name={props.pokemonInformation.name} pokemon={props.pokemonInformation}/> 
            : null}
        </ButtonBase>
        )
}

export default Pokeball