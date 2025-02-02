import { useState } from "react"

interface itemProps {
    id : number,
    description : string,
    quantity : number,
    packed : boolean,
    onPack : (id : number) => void,
    deleteItem : (id : number) => void
}

const Item = ({id, description, quantity, packed, onPack, deleteItem} : itemProps) => {
    const [isDeleted, setIsDeleted] = useState<boolean>(false)
    return (
        <>
            {!isDeleted && (<li key={id}>
                <input id={"field" + id} type="checkbox" onChange={() => onPack(id)} checked={packed}  />
                <label htmlFor={"field" + id} style={packed ? {textDecoration : "line-through"} : {textDecoration : "none"}} >{quantity} {description}</label>
                <button onClick={() => {
                    setIsDeleted(() => !isDeleted)
                    deleteItem(id)
                }}>&times;</button>
            </li>)}
        </>
    )
}

export default Item;