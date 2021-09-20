import { useState } from "react";

const AddTask = ({ addTask }) => {
	const [text, setText] = useState("");
	const [date, setDate] = useState("");
	const [reminder, setReminder] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();

		if (!text) {
			alert("Please add a task");
			return;
		}

		addTask({ text, date, reminder });

		setText("");
		setDate("");
		setReminder(false);
	};

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label htmlFor="">Task</label>
				<input
					type="text"
					placeholder="Add a New Task"
					name="task"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>

			<div className="form-control">
				<label htmlFor="">Day & time</label>
				<input
					type="text"
					placeholder="Add Day & Time"
					name="date"
					value={date}
					onChange={(e) => setDate(e.target.value)}
				/>
			</div>

			<div className="form-control-check">
				<label htmlFor="">Set Reminder</label>
				<input
					type="checkbox"
					value={reminder}
					onChange={(e) => setReminder(e.currentTarget.checked)}
				/>
			</div>
			<br />

			<input type="submit" value="Save Task" className="btn btn-block" />
		</form>
	);
};

export default AddTask;
