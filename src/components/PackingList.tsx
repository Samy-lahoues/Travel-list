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
    onDeleteItem : (id :number) => void
}
const PackingList = ({items, onDeleteItem, onClearTasks} : packingListProps) => {
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
                deleteItem={onDeleteItem} />
                )
                )}
        </ul>
            <div className="actions">
                <button>SORT BY INPUT ORDER</button>
                <button onClick={() => {
                    onClearTasks();
                    setIsEmpty(() => items.length === 0 ? !isEmpty : isEmpty)
                }}>clear list</button>
            </div>
        </div>
    )
}

export default PackingList;