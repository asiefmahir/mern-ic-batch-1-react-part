import { useState } from "react";
import "./App.css";

const App = () => {
	const [studentName, setStudentName] = useState("");
	const [students, setStudents] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editableStudent, setEditableStudent] = useState(null);

	const createHandler = (e) => {
		e.preventDefault();
		if (!studentName) {
			return alert(`Please provide a valid name`);
		}
		const newStudent = {
			id: Date.now() + "",
			name: studentName,
			isPresent: undefined,
		};

		setStudents([...students, newStudent]);
		setStudentName("");
	};

	const removeHandler = (studentId) => {
		const newStudentList = students.filter(item => item.id !== studentId);
		setStudents(newStudentList)
	}

	const editHandler = (studentId) => {
		const toBeEditedStudent = students.find(item => item.id === studentId);
		setEditMode(true);
		setEditableStudent(toBeEditedStudent);
		setStudentName(toBeEditedStudent.name)
	}

	const updateHandler = (e) => {
		e.preventDefault();
		if(!studentName) {
			return alert(`Please provide a valid name`)
		}

		const newStudentList = students.map(item => {
			if (item.id === editableStudent.id) {
				item.name = studentName
			}
			return item
		})
		
		setStudents(newStudentList);
		setEditMode(false);
		setEditableStudent(null);
		setStudentName('')
	}

	const presentHandler = (studentId) => {
		const newStudentList = students.map(item => {
			if (item.id === studentId) {
				if (item.isPresent === undefined) {
					item.isPresent = true;
				} else {
					alert(`This student is already in a list`)
				}
			}
			return item
		})

		setStudents(newStudentList)
	}

	const absentHandler = (studentId) => {
		const newStudentList = students.map(item => {
			if (item.id === studentId) {
				if (item.isPresent === undefined) {
					item.isPresent = false;
				} else {
					alert(`This student is already in a list`)
				}
			}
			return item
		})

		setStudents(newStudentList)
	}
	
	const toggleHandler = (studentId) => {
		const newStudentList = students.map(item => {
			if (item.id === studentId) {
				item.isPresent = !item.isPresent // true !true false
			}

			return item
		})

		setStudents(newStudentList)
	}

	/**
	 * student  = {
	 * 		id: Date.now() + '',
	 * 		name: 'Student 1',
	 * 		isPresent: undefined
	 * }
	 */

	return (
		<div className="App">
			<form onSubmit={(e) => {
				editMode ? updateHandler(e) : createHandler(e)
			}}>
				<input
					type="text"
					value={studentName}
					onChange={(e) => setStudentName(e.target.value)}
				/>
				<button type="submit">{editMode ? 'Update Student Name' : 'Add Student'}</button>
			</form>
			<div className="student-section">
				<div className="all-list">
					<h2>All List</h2>
					<ul>
						{students.map((student) => (
							<li key={student.id}>
								<span>{student.name}</span>
								<button onClick = {() => editHandler(student.id)}>Edit</button>
								<button onClick={() => removeHandler(student.id)}>Remove</button>
								<button onClick={() => presentHandler(student.id)}>Make Present</button>
								<button onClick={() => absentHandler(student.id)}>Make Absent</button>
							</li>
						))}
					</ul>
				</div>
				<div className="present-list">
					<h2>Present List</h2>

					<ul>
						{students
							.filter((item) => item.isPresent === true)
							.map((student) => (
								<li key={student.id}>
									<span>{student.name}</span>
									<button onClick={() => toggleHandler(student.id)}>Accidentally Added</button>
								</li>
							))}
					</ul>
				</div>
				<div className="absent-list">
					<h2>Absent List</h2>

					<ul>
						{students
							.filter((item) => item.isPresent === false)
							.map((student) => (
								<li key={student.id}>
									<span>{student.name}</span>
									<button onClick={() => toggleHandler(student.id)}>Accidentally Added</button>
								</li>
							))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default App;
