import React from 'react'
import arrowDown from '../../../assets/sort-down-solid.svg';
import minus from '../../../assets/minus-solid.svg';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        position: "relative",
        border: "2px solid white",
        margin:theme.spacing() * 2+"px 0",
        "&:hover": {
            cursor: "pointer"
        }
    },
    arrowIcon: {
        display: "block",
        position: "absolute",
        top: "-70%",
        right: "0",
        height: "100%",
        width: "5%",
        transform: "translate(-50%, 50%)",
        backgroundImage: `url(${arrowDown})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "50% 50%",
    },
    minusIcon: {
        display: "block",
        position: "absolute",
        top: "-50%",
        right: "0",
        height: "100%",
        width: "5%",
        transform: "translate(-50%, 50%)",
        backgroundImage: `url(${minus})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "50% 50%",
    }

}))

const Title = props => {
    const classes = useStyles();
    return (
        <div className={classes.root} onClick={props.onClick}>
            <h2>{props.children}</h2>
            {!props.show ? <div className={classes.arrowIcon} /> : <span className={classes.minusIcon} />}
        </div>)
}

export default Title;