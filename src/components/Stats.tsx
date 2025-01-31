
interface statsProps{
    count : number ,
    toggledTasks : number
}
const Stats = ({count, toggledTasks} : statsProps) => {
    console.log(toggledTasks)
    return (
        <footer>
            <div className='stats'>
                💼 You have {count} items on your list, and you already packed {toggledTasks} (0%)
            </div>
        </footer>
    )
}

export default Stats;