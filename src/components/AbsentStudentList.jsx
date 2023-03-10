import {useContext} from "react";
import { StudentContext } from "../contexts/Student";

const AbsentStudentList = (props) => {
    const {studentStates, dispatch} = useContext(StudentContext)
	return (
		<div className="absent-list">
			<h2>Absent List</h2>

			<ul>
				{studentStates.students
					.filter((item) => item.isPresent === false)
					.map((student) => (
						<li key={student.id}>
							<span>{student.name}</span>
							<button onClick={() => dispatch({type: 'UPDATE_STUDENT', payload: {id: student.id, targetProperty: 'isPresent', value: true}})}>
								Accidentally Added
							</button>
						</li>
					))}
			</ul>
		</div>
	);
};

export default AbsentStudentList;
