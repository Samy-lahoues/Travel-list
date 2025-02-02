
interface statsProps{
    count : number ,
    toggledTasks : number
}
const Stats = ({count, toggledTasks} : statsProps) => {
    return (
        <footer>
            <div className='stats'>
                💼 You have {count} items on your list, and you already packed {toggledTasks} {count !== 0 ? Math.floor((100 * toggledTasks) / count) : 0}%
            </div>
        </footer>
    )
}

export default Stats;