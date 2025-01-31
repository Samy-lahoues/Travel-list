import { useState } from "react"

interface itemProps {
    id : number,
    description : string,
    quantity : number,
    packed : boolean,
    deleteItem : (id : number) => void
}

const Item = ({id , description, quantity, packed, deleteItem} : itemProps) => {
    const [isPacked, setIsPacked] = useState<boolean>(packed)
    const [isDeleted, setIsDeleted] = useState<boolean>(false)
    return (
        <>
            {!isDeleted && (<li key={id}>
                <input id={"field" + id} type="checkbox" onChange={() => setIsPacked(() => !isPacked)} />
                <label htmlFor={"field" + id} style={!isPacked ? {textDecoration : 'none'} : { textDecoration: "line-through"}}>{quantity} {description}</label>
                <button onClick={() => {
                    setIsDeleted(() => !isDeleted)
                    deleteItem(id)
                }}>&times;</button>
            </li>)}
        </>
    )
}

export default Item;