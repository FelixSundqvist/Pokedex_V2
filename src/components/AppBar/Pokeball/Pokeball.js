import React from 'react';
import { ButtonBase, makeStyles } from '@material-ui/core';
import PkmnIcon from '../../UI/PkmnIcon/PkmnIcon';

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
            margin: theme.spacing()
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
            ? <PkmnIcon name={props.pokemonInformation.name} /> 
            : null}
        </ButtonBase>
        )
}

export default Pokeball