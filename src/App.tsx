import { useState, useEffect } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
// import { initialItems } from "./constants";
import "./index.css"

interface itemTypes {
	id : number,
	description : string,
	quantity : number,
	packed : boolean
}
const App = () => {
    const [items, setItems] = useState<itemTypes []>([]);
    const [toggledTasksCount, setToggledTasksCount] = useState<number>(0)

    useEffect(() => {
        setToggledTasksCount(() => items.filter(item => item.packed).length);
    }, [items]);
    const handlePacking = (id : number) => {
        console.log(id)
        setItems(items =>  items.map(item => {
            if (item.id === id) {
                return {...item, packed : !item.packed}
            }
            console.log(item.id, id)
            return item}));
    }
    const handleSorting = () => {
        setItems((items) => [...items].sort((a, b) => a.description.toLowerCase().localeCompare(b.description.toLowerCase())))
    }
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
            <Form items={items} onAddItem={addItem} />
            <PackingList 
            items={items}
            onPack={handlePacking}
            onDeleteItem={deleteItem}
            onClearTasks={clearTasks}
            onSort={handleSorting}
            />
            <Stats count={items.length} toggledTasks={toggledTasksCount} />
        </div>
    )
}
export default App;