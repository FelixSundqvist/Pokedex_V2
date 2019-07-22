import React from 'react'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        color: "white",
        textTransform: "capitalize",
    },
    eggGroup:{
        padding: theme.spacing() * 2,
        margin: theme.spacing(),
        border: "2px solid white"
    }

}))
const EggGroup = ({ eggGroups }) => {
    const classes = useStyles();
    return <div className={classes.root}>
        {eggGroups.map(cur => <div className={classes.eggGroup} key={cur.name}>{cur.name}</div>)}
    </div>
}

export default EggGroup;