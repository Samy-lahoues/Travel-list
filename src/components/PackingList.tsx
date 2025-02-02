import { useEffect, useState } from "react";
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
    onSort : () => void
}
const PackingList = ({items, onDeleteItem, onClearTasks, onPack, onSort} : packingListProps) => {
    const [isEmpty, setIsEmpty] = useState(false)
    useEffect(() => {
        setIsEmpty(false)
    }, [items.length])
    return (
        <div className='list'>
        <ul>
                {!isEmpty && items.map((item : itemTypes, index) => (
                <Item 
                key={index}
                id={index}
                description={item.description}
                quantity={item.quantity}
                packed={item.packed}
                deleteItem={onDeleteItem}
                onPack={onPack}/>
                )
                )}
        </ul>
            <div className="actions">
                <button onClick={() => onSort()}>SORT BY INPUT ORDER</button>
                <button onClick={() => {
                    onClearTasks();
                    setIsEmpty(() => items.length === 0 ? !isEmpty : isEmpty)
                }}>clear list</button>
            </div>
        </div>
    )
}

export default PackingList;