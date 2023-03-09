import React from "react";
import AllStudentList from "./AllStudentList";
import PresentStudentList from "./PresentStudentList";
import AbsentStudentList from "./AbsentStudentList";

const StudentSection = () => {
	
	return (
		<div className="student-section">
			<AllStudentList />
			<PresentStudentList />
			<AbsentStudentList />
		</div>
	);
};

export default StudentSection;