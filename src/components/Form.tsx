import { useState, FormEvent } from "react";

interface itemTypes {
	id : number,
	description : string,
	quantity : number,
	packed : boolean
}
interface formProps {
	onAddItem : (item : itemTypes) => void,
}

const Form = ({onAddItem} : formProps) => {
	const [quantity, setQuantity] = useState<number>(1);
	const [description, setDescription] = useState<string>('');
	const handleSubmit = (event : FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (description.trim().length === 0) return ;
		const newItem : itemTypes = {
			id : Date.now(),
			description : description,
			quantity : quantity,
			packed : false
		}
		onAddItem(newItem);
		// Reset input field after adding
		setDescription("")
		// Reset quantity to be 1 after adding
		setQuantity(1)
	}
	return (
	<>
		<form className="add-form" onSubmit={handleSubmit} onDragEnter={handleSubmit}>
		<h3>What do you need for your 😍 trip ?</h3>
			<select value={quantity} onChange={event => setQuantity(() => Number(event.target.value))}>
				{Array.from({length : 20}, (_, index) => index + 1).map(num => (
					<option key={num} value={num}>{num}</option>
				))}
			</select>
			<input onChange={(event) => setDescription(event.target.value)} value={description} type="text" placeholder="item" />
			<button type="submit">ADD</button>
		</form>
	</>
	);
}
export default Form;