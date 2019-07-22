import React from 'react'
import PkmnIcon from '../../../UI/PkmnIcon/PkmnIcon';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles( theme => ({
    root: {
        display: "flex",
        overflow: "hidden",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-evenly",
        color: "white",

    },
    evoItem: {
        overflow: "hidden"
    },
    evoMethod: {
        padding: theme.spacing(),
        margin: theme.spacing(),
        minWidth: "100px",
        height: "100px",
        wordWrap: "break-ord",
        fontSize: ".4vw",
        border: ".1vw solid white",
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        "@media screen and (maxWidth: 768px)": {    
            height:"80px",
            fontSize: "1vw",
        }
    } 

 
}))

const EvolutionChain = ({ evoChain }) => {
    const classes = useStyles();

    if(evoChain.chain){
        const checkEvoChain = evolution => evolution.evolves_to && evolution.evolves_to.length > 0
        const checkEvolution = (evolution, arr = []) => {
            arr.push([evolution]);
    
            if(checkEvoChain(evolution)){
                if(evolution.evolves_to.length > 1){
                    arr.push(evolution.evolves_to) 
                }else{
                    evolution.evolves_to.map(cur => checkEvolution(cur, arr))
                }
            }
            return arr
        }
    
        const createEvoItems = (key, evolutionMethod, id) => {
            
            return key[evolutionMethod] 
            ? <span className={classes.evoItem} key={ evolutionMethod + id } method={key[evolutionMethod].name}>
                    <div>{evolutionMethod.replace(/_/g, ' ')}: 
                        {key[evolutionMethod].name ? key[evolutionMethod].name : key[evolutionMethod]} 
                    </div>
                    {
                       
                        key[evolutionMethod] && key[evolutionMethod].name && evolutionMethod.includes("item") 
                        ? <PkmnIcon name={key[evolutionMethod].name} />
                        : null
                    }
                </span>
            : null
        }
    
        const filterEvolutionMethod = (evolutionMethod) => {
            
            if(evolutionMethod === null){
                return false
            }else if(evolutionMethod && evolutionMethod.key.includes("trigger") && evolutionMethod.props.method === "level-up"){
                return false;
            }
            else{
                return true;
            }
        }
        const evolutionMethod = ({evolution_details}) => {
            if(evolution_details.length === 0 ){
                return
            }
            return evolution_details.map((cur, id) => Object.keys(cur)
                .map(currentMethod => createEvoItems(cur, currentMethod, id))
                .filter(current => filterEvolutionMethod(current)))
            .reduce((a, b) => a.concat(b), []) // flatten
        };
        
        const createEvolutionElements = (cur, id) => 
            <div className={classes.evoMethod}key={cur.species.name} >
                <PkmnIcon name={cur.species.name} />
                {cur.species.name}
            </div>
    

        const createEvolutionMethodEl = (cur, id) => 
        <div className={classes.evoMethod} key={cur + id}>
            {evolutionMethod(cur)}
        </div>
    
        const evolutionBranch = checkEvolution(evoChain.chain).map((currentBranch, id) => 
            <React.Fragment key={"branch"+ id}>
                {id > 0 ? <div>{currentBranch.map(createEvolutionMethodEl)}</div> : null}
                <div>{currentBranch.map(createEvolutionElements)}</div>
            </React.Fragment>)
    
        return <div className={classes.root}>{evolutionBranch}</div>
    }
 
}   

export default EvolutionChain;