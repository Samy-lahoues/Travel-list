import { useState, useMemo } from "react";
import Item from "./Item";

interface itemTypes {
	id : number,
	description : string,
	quantity : number,
	packed : boolean
}

interface packingListProps{
    items : itemTypes [],
    onClearTasks : () => void,
    onDeleteItem : (id :number) => void,
    onPack : (id : number) => void,
}

type SortType = 'default' | 'description' | 'packed'

const PackingList = ({items, onDeleteItem, onClearTasks, onPack} : packingListProps) => {
    const [sortBy, setSortBy] = useState<SortType>("default")

    const sortedItems : itemTypes [] = useMemo(() => {
        switch(sortBy){
            case "description":
                return [...items].sort((a, b) => a.description.toLowerCase().localeCompare(b.description.toLowerCase()));
            case "packed":
                return [...items].sort((a, b) => Number(a.packed) - Number(b.packed))
            default:
                return items
        }
    },[sortBy, items])

    return (
        <div className='list'>
        <ul>
                {sortedItems.map((item : itemTypes) => (
                <Item 
                key={item.id}
                id={item.id}
                description={item.description}
                quantity={item.quantity}
                packed={item.packed}
                deleteItem={onDeleteItem}
                onPack={onPack}/>
                )
                )}
        </ul>
            <div className="actions">
                <select  value={sortBy} onChange={(event) => setSortBy(event.target.value as SortType)}>
                    <option value='default'>SORT BY INPUT ORDER</option>
                    <option value='description'>SORT BY DESCRIPTION</option>
                    <option value='packed'>SORT BY PACKED STATUS</option>
                </select>
                {items.length !== 0 && (<button onClick={onClearTasks}>clear list</button>)}
            </div>
        </div>
    )
}

export default PackingList;