const AllStudentList = (props) => {
	

    const removeHandler = (studentId) => {
		const newStudentList = props.students.filter(item => item.id !== studentId);
		props.setStudents(newStudentList)
	}

	const editHandler = (studentId) => {
		const toBeEditedStudent = props.students.find(item => item.id === studentId);
		props.setEditMode(true);
		props.setEditableStudent(toBeEditedStudent);
		props.setStudentName(toBeEditedStudent.name)
	}

	

	const presentHandler = (studentId) => {
		const newStudentList = props.students.map(item => {
			if (item.id === studentId) {
				if (item.isPresent === undefined) {
					item.isPresent = true;
				} else {
					alert(`This student is already in a list`)
				}
			}
			return item
		})

		props.setStudents(newStudentList)
	}

	const absentHandler = (studentId) => {
		const newStudentList = props.students.map(item => {
			if (item.id === studentId) {
				if (item.isPresent === undefined) {
					item.isPresent = false;
				} else {
					alert(`This student is already in a list`)
				}
			}
			return item
		})

		props.setStudents(newStudentList)
	}

	return (
		<div className="all-list">
			<h2>All List</h2>
			<ul>
				{props.students.map((student) => (
					<li key={student.id}>
						<span>{student.name}</span>
						<button onClick={() => editHandler(student.id)}>
							Edit
						</button>
						<button onClick={() => removeHandler(student.id)}>
							Remove
						</button>
						<button onClick={() => presentHandler(student.id)}>
							Make Present
						</button>
						<button onClick={() => absentHandler(student.id)}>
							Make Absent
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AllStudentList;
