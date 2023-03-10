import {useReducer, createContext} from 'react';
import { studentReducer } from '../reducers/student';

export const StudentContext = createContext();


const initState = {
	studentName: '',
	students: [],
	editMode: false,
	editableStudent: null
}

const StudentProvider = ({children}) => {
   
	const [studentStates, dispatch] = useReducer(studentReducer, initState)

    return (
        <StudentContext.Provider value={{studentStates, dispatch}}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentProvider

