import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';

const PokemonCard = ({name, id, onClick, selected, children}) => {
    const useStyles = makeStyles(theme => ({
        card: {
            height: "100px",
            width: "200px",
            color: "black",
            margin: theme.spacing(),
            textTransform: "capitalize",
            "&:hover":{
                cursor: "pointer",
                opacity: 0.8
            },
            transition: "opacity 100ms ease",
            backgroundColor: "white",
            display: "flex",
            justifyItems: "center",
            alignContent:"center"
        },
        image: {
            margin: "0 auto",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "50% 50%",
            display: "inline-block"
        }
    }))

    const classes = useStyles();

    return (
    <Card 
        className={classes.card}
        onClick={(event) => onClick(event, name)}>
            <img className={classes.image} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name}/>
        <CardContent>
            
            
            <p>{name}</p>
            <p>{children}</p>
        </CardContent>
    </Card>)
}
export default PokemonCard;