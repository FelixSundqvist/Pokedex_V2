export const getIDFromURL = (url) => url.match(/\d{1,3}\/$/)[0].split("/")[0];
export const checkLetter = str => str.toUpperCase().replace(/É/, "E")
export const roundNum = (height, round) => Number.parseFloat(height * round).toFixed(2)
export const createArr = (arr, newItem) => {
    return [...arr, newItem]
}
export const newState = (oldState, newState) =>({
    ...oldState,
    ...newState
})

export const calculateStats = (pokemon) => {
    const { stats, EVs, IVs, level, nature } = pokemon
    
    return stats
    .map(stat => ({baseStat: stat.base_stat, name: stat.stat.name}))
    .map((stat, index) => {
        let calculated = 0;

        if(stat.name === "hp"){
            calculated = pokemon.name !== "shedinja" ? Math.round(((2 * stat.baseStat + IVs[index] + (EVs[index] / 4)) * level) / 100 + level + 10) : 1
        }else{
            let natureFactor = 1;
            if(nature.inc === stat.name){
                natureFactor = 1.1
            }else if(nature.dec === stat.name){
                natureFactor = 0.9
            }
            calculated = ((((2 * stat.baseStat + IVs[index] + (EVs[index] / 4) )* level) / 100) + 5) * natureFactor
        }
        return {
            stat: calculated.toFixed(0),
            name: stat.name
        }
    })

}