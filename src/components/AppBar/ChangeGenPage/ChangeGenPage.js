import React from 'react';
import { Button, ButtonGroup } from '@material-ui/core';

export default props => {
    const gens = Array.from(Array(7), (generation, index) => 
        <Button key={index + "gen"}
        onClick={() => props.genClick(index)}
        selected={props.currentGen + 1 === index + 1}>{index + 1}</Button>
    )
    
    return(<div style={{flexGrow: 1}}><ButtonGroup variant="contained" color="secondary">{gens}</ButtonGroup></div>)
}