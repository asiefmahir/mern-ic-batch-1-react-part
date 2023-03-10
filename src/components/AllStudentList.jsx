import { useContext } from "react";
import { StudentContext } from "../contexts/Student";

const AllStudentList = () => {
	const { studentStates, dispatch } = useContext(StudentContext);

	const transferToAList = (student, value) => {
		if (student.isPresent === undefined) {
			dispatch({
				type: "UPDATE_STUDENT",
				payload: {
					id: student.id,
					targetProperty: "isPresent",
					value: value,
				},
			});
		} else {
			alert(`This student of id ${student.id} is already in a list`);
		}
	};

	// const makePresentHandler = (student) => {
	// 	if (student.isPresent === undefined ) {
	// 		dispatch({type: 'UPDATE_STUDENT', payload: {id: student.id, targetProperty: 'isPresent', value: true}})
	// 	} else {
	// 		alert(`This student of id ${student.id} is already in a list`)
	// 	}
	// }

	// const makeAbsentHandler = (student) => {
	// 	if (student.isPresent === undefined ) {
	// 		dispatch({type: 'UPDATE_STUDENT', payload: {id: student.id, targetProperty: 'isPresent', value: false}})
	// 	} else {
	// 		alert(`This student of id ${student.id} is already in a list`)
	// 	}
	// }

	return (
		<div className="all-list">
			<h2>All List</h2>
			<ul>
				{studentStates.students.map((student) => (
					<li key={student.id}>
						<span>{student.name}</span>
						<button
							onClick={() =>
								dispatch({
									type: "EDIT_STUDENT",
									payload: student.id,
								})
							}
						>
							Edit
						</button>
						<button
							onClick={() =>
								dispatch({
									type: "REMOVE_STUDENT",
									payload: student.id,
								})
							}
						>
							Remove
						</button>
						<button onClick={() => transferToAList(student, true)}>
							Make Present
						</button>
						<button
							onClick={() =>
								transferToAList(student, false)
							}
						>
							Make Absent
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default AllStudentList;
