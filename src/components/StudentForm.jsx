import { useContext } from "react";
import { StudentContext } from "../contexts/Student";

const StudentForm = () => {
    const studentCtx = useContext(StudentContext);
    console.log(studentCtx, 'studentCtx');

    

	return (
		<form
			onSubmit={(e) => {
				studentCtx.editMode ? studentCtx.updateHandler(e) : studentCtx.createHandler(e);
			}}
		>
			<input
				type="text"
				value={studentCtx.studentName}
				onChange={(e) => studentCtx.setStudentName(e.target.value)}
			/>
			<button type="submit">
				{studentCtx.editMode ? "Update Student Name" : "Add Student"}
			</button>
		</form>
	);
};

export default StudentForm;
