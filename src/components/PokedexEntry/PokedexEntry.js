import React, { Suspense } from 'react';
import Types from './hidden/Types/Types';
import PokemonImage3D from './PokemonImage3D/PokemonImage3D';
import { makeStyles, Button } from '@material-ui/core';
import { checkLetter, roundNum } from '../../utility';
import Abilities from './Abilities/Abilities';
import Hidden from './hidden/Hidden';

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: "100%",
        width: "100%",
        color: "white",
        textTransform: "capitalize",
        textAlign: "center",
        padding: theme.spacing() * 2
    },
    pokemonInfoText: {
        border: "2px solid white", 
        padding: theme.spacing() * 2,
        margin: theme.spacing(),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }
}))

const PokemonInfo = ({habitat, base_happiness, capture_rate, height, weight, className }) => {
    
    const pokemonDescription = {}
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
    return (<div className={className}>{Object.keys(pokemonDescription).map(current => pokemonDescription[current])}</div>)
} 

const PokedexInfo = React.memo(props => {
    const {selectedPokemon, pokedexInfo, evoChain, evolutionClick } = props;
    if(selectedPokemon && pokedexInfo && evoChain){
        const { flavor_text_entries, varieties, habitat, base_happiness, capture_rate, egg_groups } = pokedexInfo;
        const { moves, height, weight, abilities, stats } = selectedPokemon;
        const classes = useStyles();
        const imageLink = `http://felixsundqvist.org/pokemon/${selectedPokemon.name}.gif`

        const pokemonProperties = {}        
        //DESCRIPTION
        const description = flavor_text_entries 
        ? flavor_text_entries.filter(cur => cur.language.name === "en")[0] 
        : null;
    
        //GENERA
        const pokemonGenera = pokedexInfo.genera 
        ? pokedexInfo.genera.filter(cur => cur.language.name === "en")[0] : null;
        const pokemonGenus = pokemonGenera 
        ? <h2 key="genus">{checkLetter(pokemonGenera.genus)}</h2> 
        : null;

        //ABILITIES
        pokemonProperties.abilities = abilities 
        ? <Abilities className={classes.pokemonInfoText} key="abilities" abilities={abilities}/>
        : null;
        
        //pokemon dex entry
        pokemonProperties.description = description 
        ?   
            <React.Fragment key="description">
                <h2>Dex Entry</h2>
                <div className={classes.pokemonInfoText}>
                    <p>{description.flavor_text}</p>
                </div>
            </React.Fragment>    
        :   <div key="loading">LOADING</div>;
    
        //Map through all pkmnProperties and render
        const allPkmnProperties = Object.keys(pokemonProperties).map(cur => pokemonProperties[cur]);
        
        //image gif
        const pokemon3DImage =  imageLink !== "http://felixsundqvist.org/pokemon/undefined.gif" 
            ? <PokemonImage3D imageLink={imageLink} evolutionClick={evolutionClick} /> 
            : null;
        
        const formes = varieties && varieties.length > 1 
        ? (
        <div className={classes.button}>
            {
            varieties.map(form => 
                !form.pokemon.name.includes("totem") 
                ? <Button 
                    key={form.pokemon.name}
                    variant="contained" 
                    color="secondary"
                    style={{margin: "8px"}}
                    onClick={() => props.onClick(form.pokemon.name)}>{form.pokemon.name}</Button> 
                : null
                )
            }
        </div>)
        :  null;

        const types = selectedPokemon.types 
        ? <div 
            style={{display: "flex"}}
            key="types">{
                selectedPokemon.types
                .map(cur => <Types key={cur.type.name} type={cur.type.name} />)
                .reverse()}
            </div> 
        : null;

        return(
            <div className={classes.root}>
                <Suspense fallback={<p>LOADING</p>}>
                    {pokemon3DImage}
                </Suspense>
                <h1>{selectedPokemon.name}</h1>

                {pokemonGenus}
                {types}
                {formes}

                <PokemonInfo
                    className={classes.pokemonInfoText} 
                    habitat={habitat} 
                    base_happiness={base_happiness} 
                    capture_rate={capture_rate}
                    height={height}
                    weight={weight}
                    types={selectedPokemon.types}
                 />
                {allPkmnProperties}
                <Hidden 
                    evoChain={evoChain}
                    stats={stats}
                    moves={moves}
                    egg_groups={egg_groups} />
                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={props.onAddClick}
                    >Add To Team</Button>
            </div>
        )
    }

})

export default PokedexInfo;