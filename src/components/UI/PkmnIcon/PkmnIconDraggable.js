import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import PkmnIcon from './PkmnIcon';
import { ItemTypes } from '../../../constants'

const PkmnIconDraggable = ({pokemon, name, movePokemon}) => {
    const ref = useRef(null)

    const [, drop] = useDrop({
        accept: ItemTypes.pokemonPosition,
        hover(item, monitor){
            if(!ref.current){
                return
            }
            const dragIndex = item.index;
            const hoverIndex = pokemon.id;
            if(dragIndex === hoverIndex){
                return
            }

            const hoverBoundingRect = ref.current.getBoundingClientRect() 
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 4
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }
              // Dragging upwards
              if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY * 2) {
                return
            }
            movePokemon(dragIndex, hoverIndex);
            item.index = hoverIndex
        }
    })
    const [{ isDragging }, drag] = useDrag({
        item: {type: ItemTypes.pokemonPosition, id: pokemon.id, index: pokemon.id },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    })
    const opacity = isDragging ? 0 : 1
    drag(drop(ref))
    return <span ref={ref} style={{ opacity, borderRadius: "50%", overflow: "hidden" }}><PkmnIcon name={name} /></span>
}

export default PkmnIconDraggable