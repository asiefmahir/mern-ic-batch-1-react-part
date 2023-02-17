import React from "react";
import AllStudentList from "./AllStudentList";
import PresentStudentList from "./PresentStudentList";
import AbsentStudentList from "./AbsentStudentList";

const StudentSection = (props) => {
	const toggleHandler = (studentId) => {
		const newStudentList = props.students.map((item) => {
			if (item.id === studentId) {
				item.isPresent = !item.isPresent; // true !true false
			}

			return item;
		});

		props.setStudents(newStudentList);
	};
	return (
		<div className="student-section">
			<AllStudentList
				setStudentName={props.setStudentName}
				students={props.students}
				setStudents={props.setStudents}
				editMode={props.editMode}
				setEditMode={props.setEditMode}
				editableStudent={props.editableStudent}
				setEditableStudent={props.setEditableStudent}
			/>
			<PresentStudentList
				students={props.students}
				setStudents={props.setStudents}
                toggleHandler = {toggleHandler}
			/>
			<AbsentStudentList
				students={props.students}
				setStudents={props.setStudents}
                toggleHandler = {toggleHandler}
			/>
		</div>
	);
};

export default StudentSection;
