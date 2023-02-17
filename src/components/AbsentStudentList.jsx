import React from "react";

const AbsentStudentList = (props) => {
	return (
		<div className="absent-list">
			<h2>Absent List</h2>

			<ul>
				{props.students
					.filter((item) => item.isPresent === false)
					.map((student) => (
						<li key={student.id}>
							<span>{student.name}</span>
							<button onClick={() => props.toggleHandler(student.id)}>
								Accidentally Added
							</button>
						</li>
					))}
			</ul>
		</div>
	);
};

export default AbsentStudentList;
