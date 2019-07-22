import React from 'react';
import { makeStyles } from '@material-ui/core';


const MoveListItems = ({moves, show}) => {

    const classes = makeStyles(theme => ({
        root: {
        margin: 0,
        padding: 0,
        listStyleType: "none",
        border: "2px solid white",
        display:`${show ? "block" : "none"}`
        },
        li: {
            padding: theme.spacing() * 2,
            "&:nth-child(even)": {
                backgroundColor: "white",
                color: "black"
            }
        }
    }))()

    let learnedByLevel = moves.filter(cur => {
        return cur.version_group_details[0].level_learned_at !== 0}
    ).sort((a, b) => a.version_group_details[0].level_learned_at - b.version_group_details[0].level_learned_at)

    let learnedByOther = moves.filter(cur => cur.version_group_details[0].move_learn_method.name !== "level-up");
    
    const createListItem = (cur) => {
        let learnProperties = null;
        if(cur.version_group_details) {
            learnProperties = (
                <>
                    <p>
                        Method: {cur.version_group_details[0].move_learn_method.name}
                    </p>
                    {
                        cur.version_group_details[0].move_learn_method.name === "level-up" 
                        ? <p>Level {cur.version_group_details[0].level_learned_at}</p>
                        : null
                    }
                </>
            )
                
        }
        return( 
        <li className={classes.li} key={cur.move.name}>
            {cur.move.name} 
            {learnProperties}
        </li>)
    }

    return(<ul className={classes.root}>{learnedByLevel.map(createListItem)}{learnedByOther.map(createListItem)}</ul>)
}

export default MoveListItems;