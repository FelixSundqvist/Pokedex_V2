import React from 'react'
import showOnClick from '../../../hoc/showOnClick/showOnClick';

const EvolutionChain = React.lazy(() =>  import('./EvolutionChain/EvolutionChain'));
const MoveList = React.lazy(() => import('./Moves/MoveList'));
const EggGroup = React.lazy(() => import('./EggGroup/EggGroup'));
const Stats = React.lazy(() => import('./Stats/Stats')) 

const Hidden = ({evoChain, stats, moves, egg_groups}) => {
    const hiddenProperties = {} 
    //evolution chain, stats, moves
    hiddenProperties.evolutionChain = evoChain 
        ? showOnClick(EvolutionChain)({evoChain: evoChain, title: "Evolution Chain"}) 
        : null;
    hiddenProperties.stats = stats 
        ? showOnClick(Stats)({stats:stats, title: "Stats"}) 
        : null;
    hiddenProperties.moves = moves 
        ? showOnClick(MoveList)({moves: moves, title: "Move List"})
        :null;
    hiddenProperties.eggGroups = egg_groups ? showOnClick(EggGroup)({title:"Egg Group", eggGroups:egg_groups}) : null;    
    const allHiddenProperties = Object.keys(hiddenProperties).map(cur => hiddenProperties[cur]);
    return <div>{allHiddenProperties}</div>

}

export default Hidden;