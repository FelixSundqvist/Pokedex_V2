import React from 'react'
import { makeStyles } from '@material-ui/styles';

const PokemonImage3D = props => {
    const classes = makeStyles(theme => ({
        root: {
            height: "150px",
            backgroundImage: `url(${props.imageLink})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "50% 50%",
            margin: "16px 0",
        }
    }))();


    return (<div className={classes.root} name={props.imageLink}></div>)

}

export default PokemonImage3D;