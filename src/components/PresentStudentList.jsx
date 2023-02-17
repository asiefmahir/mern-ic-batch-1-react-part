import React from "react";

const PresentStudentList = (props) => {

 
	return (
		<div className="present-list">
			<h2>Present List</h2>

			<ul>
				{props.students
					.filter((item) => item.isPresent === true)
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

export default PresentStudentList;
