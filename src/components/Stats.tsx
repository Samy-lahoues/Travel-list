
interface itemTypes {
	id : number,
	description : string,
	quantity : number,
	packed : boolean
}
interface statsProps{
    items : itemTypes [] ,
}
const Stats = ({items} : statsProps) => {
    if (items.length === 0){
        return <footer className="stats"> <em>Start adding new items to your packing list</em> 🚀</footer>
    }
    const itemsNum : number = items.length;
    const numPacked : number = items.filter(item => item.packed).length
    const percentage : number = Math.floor((100 * numPacked) / itemsNum);
    return (
        <footer className='stats'>
            <em>
                {percentage === 100 ? "You got everything Ready to go ✈"
                : `💼 You have ${itemsNum} items on your list, and you already packed ${numPacked} (${percentage}%)`}
            </em>
        </footer>
    )
}

export default Stats;