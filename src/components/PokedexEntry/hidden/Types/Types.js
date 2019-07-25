import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(),
        margin: theme.spacing()+"px auto",
        border: "2px solid black",
        flex: 1,
        maxWidth: "40%",
        color: "white",
        textTransform: "uppercase",
        fontFamily: "sans-serif",
    }
}))

const Types = ({ type }) => {
    const classes = useStyles();
    let bgColor = "#BFBCB6";
    switch(type){
        case("bug"): 
            bgColor = "#9EAC24";
        break;
        case("dark"):
            bgColor = "#2A241F";
        break;
        case("dragon"):
            bgColor = "#6C5CBA";
        break;  
        case("electric"):
            bgColor = "#E19E1E";
        break;
        case("fairy"):
            bgColor = "#EDA7EF";
        break;
        case("fighting"):
            bgColor ="#603228";
        break;
        case("fire"):
            bgColor = "#CE340C";
        break;
        case("flying"):
            bgColor = "#6879CF";
        break;
        case("ghost"):
            bgColor = "#444364";
        break;
        case("grass"):
            bgColor = "#467127";
        break;
        case("ground"):
            bgColor = "#937D52";
        break;
        case("ice"):
            bgColor = "#72D6EF";
        break;
        case("normal"):
            bgColor = "#BFBCB6";
        break;
        case("poison"):
            bgColor = "#884D88";
        break;
        case("psychic"):
            bgColor = "#D84C7B";
        break;
        case("rock"):
            bgColor = "#998444";
        break;
        case("steel"):
            bgColor = "#827F8C";
        break;
        case("water"):
            bgColor = "#3C8FDC";
        break;
        default:
            bgColor = "white";
    }
    return(<div className={classes.root} style={{backgroundColor: bgColor}}>{type}</div>)
}

export default Types;