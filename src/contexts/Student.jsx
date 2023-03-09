import {useState, createContext} from 'react';

export const StudentContext = createContext();


const StudentProvider = ({children}) => {
    const [studentName, setStudentName] = useState("");
	const [students, setStudents] = useState([]);
    const [editMode, setEditMode] = useState(false);
	const [editableStudent, setEditableStudent] = useState(null);


    const createHandler = (e) => {
		e.preventDefault();
		if (!studentName) {
			return alert(`Please provide a valid name`);
		}
		const newStudent = {
			id: Date.now() + "",
			name: studentName,
			isPresent: undefined,
		};

		setStudents([...students, newStudent]);
		setStudentName("");
	};

    const updateHandler = (e) => {
		e.preventDefault();
		if(!studentName) {
			return alert(`Please provide a valid name`)
		}

		const newStudentList = students.map(item => {
			if (item.id === editableStudent.id) {
				item.name = studentName
			}
			return item
		})
		
		setStudents(newStudentList);
		setEditMode(false);
		setEditableStudent(null);
		setStudentName('')
	}

    const removeHandler = (studentId) => {
		const newStudentList = students.filter(item => item.id !== studentId);
		setStudents(newStudentList)
	}

	const editHandler = (studentId) => {
		const toBeEditedStudent = students.find(item => item.id === studentId);
		setEditMode(true);
		setEditableStudent(toBeEditedStudent);
		setStudentName(toBeEditedStudent.name)
	}

	

	const presentHandler = (studentId) => {
		const newStudentList = students.map(item => {
			if (item.id === studentId) {
				if (item.isPresent === undefined) {
					item.isPresent = true;
				} else {
					alert(`This student is already in a list`)
				}
			}
			return item
		})

		setStudents(newStudentList)
	}

	const absentHandler = (studentId) => {
		const newStudentList = students.map(item => {
			if (item.id === studentId) {
				if (item.isPresent === undefined) {
					item.isPresent = false;
				} else {
					alert(`This student is already in a list`)
				}
			}
			return item
		})

		setStudents(newStudentList)
	}


    const toggleHandler = (studentId) => {
		const newStudentList = students.map((item) => {
			if (item.id === studentId) {
				item.isPresent = !item.isPresent; // true !true false
			}

			return item;
		});

		setStudents(newStudentList);
	};
    console.log(children, 'from context');
/*  */
    const studentCtx = {studentName, setStudentName, students, setStudents, editMode, setEditMode, editableStudent, setEditableStudent, toggleHandler, createHandler, updateHandler, editHandler, removeHandler, presentHandler, absentHandler}

    return (
        <StudentContext.Provider value={studentCtx}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentProvider

