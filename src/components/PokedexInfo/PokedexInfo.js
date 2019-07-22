import React, { Suspense } from 'react';
import Types from './Types/Types';
import InfoImage from './InfoImage/InfoImage';
import { makeStyles, Button } from '@material-ui/core';
import FormButton from './FormButton/FormButton'
import Properties from './Properties/Properties';
import { checkLetter } from '../../utility';
import Abilities from './Abilities/Abilities';
import showOnClick from '../../hoc/showOnClick';

const Stats = React.lazy(() => import('./Stats/Stats')) 
const EvolutionChain = React.lazy(() =>  import('./EvolutionChain/EvolutionChain'));
const DexEntry = React.lazy(() => import('./DexEntry/DexEntry'));
const MoveList = React.lazy(() => import('./Moves/MoveList'));
const EggGroup = React.lazy(() => import('./EggGroup/EggGroup'));

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: "100%",
        width: "100%",
        color: "white",
        textTransform: "capitalize",
        textAlign: "center",
        padding: theme.spacing() * 2
    }

}))

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
        ? <Abilities key="abilities" abilities={abilities}/>
        : null;
        
        //pokemon dex entry
        pokemonProperties.description = description 
        ?   
            <React.Fragment key="description">
                <h2>Dex Entry</h2>
                <DexEntry>
                    <p>{description.flavor_text}</p>
                </DexEntry>
            </React.Fragment>    
        :   <div key="loading">LOADING</div>;
    
        //evolution chain, stats, moves
        pokemonProperties.evolutionChain = evoChain 
            ? showOnClick(EvolutionChain)({evoChain: evoChain, title: "Evolution Chain"}) 
            : null;
        pokemonProperties.stats = stats 
            ? showOnClick(Stats)({stats:stats, title: "Stats"}) 
            : null;
        pokemonProperties.moves = moves 
            ? showOnClick(MoveList)({moves: moves, title: "Move List"})
            :null;
        pokemonProperties.eggGroups = egg_groups ? showOnClick(EggGroup)({title:"Egg Group", eggGroups:egg_groups}) : null;    

        //Map through all pkmnProperties and render
        const allPkmnProperties = Object.keys(pokemonProperties).map(cur => pokemonProperties[cur]);
        
        //image gif
        const infoImage =  imageLink !== "http://felixsundqvist.org/pokemon/undefined.gif" 
            ? <InfoImage imageLink={imageLink} evolutionClick={evolutionClick} /> 
            : null;

        const formes = varieties && varieties.length > 1 
        ? (<div className={classes.button}>
        {
        varieties.map(form => 
            <FormButton 
                key={form.pokemon.name}
                onClick={props.evolutionClick}
                name={form.pokemon.name}
                >
                {form.pokemon.name}
            </FormButton>)
        }
        </div>)
        :  null;

        const types = selectedPokemon.types 
        ? <div 
            style={{display: "flex"}}
            key="types">{selectedPokemon.types.map(cur => <Types key={cur.type.name} type={cur.type.name} />).reverse()}</div> 
        : null;

        return(
            <div className={classes.root}>
                <Suspense fallback={<p>LOADING</p>}>
                    {infoImage}
                </Suspense>
                <h1>{selectedPokemon.name}</h1>

                {pokemonGenus}
                {types}
                {formes}
                
                <Properties 
                    habitat={habitat} 
                    base_happiness={base_happiness} 
                    capture_rate={capture_rate}
                    height={height}
                    weight={weight}
                    types={selectedPokemon.types}
                ></Properties>
                {allPkmnProperties}
                
                <Button 
                    variant="outlined" 
                    color="secondary" 
                    onClick={props.onAddClick}
                    style={{backgroundColor: "white"}}
                    >Add To Team</Button>
            </div>
        )
    }

})

export default PokedexInfo;