import React from 'react';
import { roundNum } from '../../../utility/';
import Types from '../Types/Types';

const Properties = ({habitat, base_happiness, capture_rate, height, weight }) => {
    const pokemonDescription = {
        
    }
    //TYPES

    pokemonDescription.habitat = habitat ? <p key="habitat"> Habitat: { habitat.name }</p> : null;
    pokemonDescription.baseHappiness = base_happiness ? <p key="happiness" >Base Happiness : {base_happiness}</p> : null;
    pokemonDescription.captureRate = capture_rate ? <p key="capture">Capture Rate: {capture_rate} </p> : null;
    pokemonDescription.size = height && weight
    ?   
        <React.Fragment key="size">
            <p>
                {`Height: ${roundNum(height, 0.1)} M`} 
            </p>
            <p>
                {`Weight: ${roundNum(weight, 0.1)} KG`}
            </p>
        </React.Fragment>
    : null;
    return (<div style={{border: "2px solid white", margin: "16px 0"}}>{Object.keys(pokemonDescription).map(current => pokemonDescription[current])}</div>)
}

export default Properties;