

const StudentForm = (props) => {

    const createHandler = (e) => {
		e.preventDefault();
		if (!props.studentName) {
			return alert(`Please provide a valid name`);
		}
		const newStudent = {
			id: Date.now() + "",
			name: props.studentName,
			isPresent: undefined,
		};

		props.setStudents([...props.students, newStudent]);
		props.setStudentName("");
	};

    const updateHandler = (e) => {
		e.preventDefault();
		if(!props.studentName) {
			return alert(`Please provide a valid name`)
		}

		const newStudentList = props.students.map(item => {
			if (item.id === props.editableStudent.id) {
				item.name = props.studentName
			}
			return item
		})
		
		props.setStudents(newStudentList);
		props.setEditMode(false);
		props.setEditableStudent(null);
		props.setStudentName('')
	}

	return (
		<form
			onSubmit={(e) => {
				props.editMode ? updateHandler(e) : createHandler(e);
			}}
		>
			<input
				type="text"
				value={props.studentName}
				onChange={(e) => props.setStudentName(e.target.value)}
			/>
			<button type="submit">
				{props.editMode ? "Update Student Name" : "Add Student"}
			</button>
		</form>
	);
};

export default StudentForm;
