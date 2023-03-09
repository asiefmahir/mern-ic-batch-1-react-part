import { useContext } from "react";
import { StudentContext } from "../contexts/Student";

const AllStudentList = () => {
	const studentData =  useContext(StudentContext)

    
	return (
		<div className="all-list">
			<h2>All List</h2>
			<ul>
				{studentData.students.map((student) => (
					<li key={student.id}>
						<span>{student.name}</span>
						<button onClick={() => studentData.editHandler(student.id)}>
							Edit
						</button>
						<button onClick={() => studentData.removeHandler(student.id)}>
							Remove
						</button>
						<button onClick={() => studentData.presentHandler(student.id)}>
							Make Present
						</button>
						<button onClick={() => studentData.absentHandler(student.id)}>
							Make Absent
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AllStudentList;
