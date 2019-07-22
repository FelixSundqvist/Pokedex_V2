import React from 'react';
import { Button } from '@material-ui/core';

const FormButton = props => {

    return !props.children.includes("totem") 
    ? <Button 
        variant="contained" 
        color="secondary"
        style={{margin: "8px"}}
        onClick={() => props.onClick(props.name)}>{props.children}</Button> 
    : null;
}

export default FormButton