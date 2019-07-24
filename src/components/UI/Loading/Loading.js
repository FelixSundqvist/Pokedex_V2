import React from 'react';
import loadingImage from '../../../assets/loading.gif';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "50%",
        height: "100%",
        color: "white",
        fontSize: "2vw",
        margin: "0 auto"
    },
    image: {
        margin: "0 auto"
    }
}))
const Loading = () => {    
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <img src={loadingImage} className={classes.image} alt="loading" />
        <h1>LOADING</h1>
    </div>)
}

export default Loading;