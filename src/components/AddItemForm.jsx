import { icons } from "../assets";

const AddItemForm = ({
	listForm,
	submitHandler,
	title,
	onChangeHandler,
	setEditMode,
}) => {
	return (
		<div className="form-container">
			<div className="form-card">
				<form>
					<textarea
						value={title}
						onChange={onChangeHandler}
						className="form-textarea"
						name=""
						id=""
						cols="30"
						rows="2"
					></textarea>
				</form>
			</div>
			<div className="button-container">
				<button className="add-button" onClick={submitHandler}>
					{listForm ? "Add List" : "Add Task"}
				</button>
				<img
					src={icons.crossIcon}
					alt=""
					className="add-item-icon"
					onClick={(e) => {
						e.stopPropagation();
						setEditMode(false);
					}}
				/>
			</div>
		</div>
	);
};

export default AddItemForm;
