import { useState, useEffect } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { initialItems } from "./constants";
import "./index.css"

interface itemTypes {
	id : number,
	description : string,
	quantity : number,
	packed : boolean
}
const App = () => {
    const [items, setItems] = useState<itemTypes []>(initialItems);
    const [toggledTasksCount, setToggledTasksCount] = useState<number>(0)

    useEffect(() => {
        setToggledTasksCount(() => items.filter(item => item.packed).length);
    }, [items]);

    // function to add a new task
    const addItem = (newItem: itemTypes) => {
        setItems((prevItems) => [...prevItems, newItem])
    }

    // function to delete an item
    const deleteItem = (id : number) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    // function to clear all tasks
    const clearTasks = () => {
        setItems([])
    }


    return (
        <div className="app">
            <Logo />
            <Form onAddItem={addItem} />
            <PackingList items={items} onDeleteItem={deleteItem} onClearTasks={clearTasks} />
            <Stats count={items.length} toggledTasks={toggledTasksCount} />
        </div>
    )
}
export default App;