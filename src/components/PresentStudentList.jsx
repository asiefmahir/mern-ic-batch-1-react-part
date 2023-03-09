import {useContext} from "react";
import { StudentContext } from "../contexts/Student";

const PresentStudentList = () => {
	const {students, toggleHandler} = useContext(StudentContext)
 
	return (
		<div className="present-list">
			<h2>Present List</h2>

			<ul>
				{students
					.filter((item) => item.isPresent === true)
					.map((student) => (
						<li key={student.id}>
							<span>{student.name}</span>
							<button onClick={() => toggleHandler(student.id)}>
								Accidentally Added
							</button>
						</li>
					))}
			</ul>
		</div>
	);
};

export default PresentStudentList;