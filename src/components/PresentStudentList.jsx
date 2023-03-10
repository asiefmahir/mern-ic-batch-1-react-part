import {useContext} from "react";
import { StudentContext } from "../contexts/Student";

const PresentStudentList = () => {
	const {studentStates, dispatch} = useContext(StudentContext)
 
	return (
		<div className="present-list">
			<h2>Present List</h2>

			<ul>
				{studentStates.students
					.filter((item) => item.isPresent === true)
					.map((student) => (
						<li key={student.id}>
							<span>{student.name}</span>
							<button onClick={() => dispatch({type: 'UPDATE_STUDENT', payload: {id: student.id, targetProperty: 'isPresent', value: false}})}>
								Accidentally Added
							</button>
						</li>
					))}
			</ul>
		</div>
	);
};

export default PresentStudentList;