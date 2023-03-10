export const studentReducer = (state, action) => {
	switch(action.type) {
		case 'CHANGE_NAME' : {
			return {
				...state,
				studentName: action.payload
			}
		}

		case 'CREATE_STUDENT': {
			const newStudent = {
				id: Date.now() + '',
				name: state.studentName,
				isPresent: undefined
			}

			return {
				...state,
				students: [...state.students, newStudent],
				studentName: ''
			}
		}

		case 'EDIT_STUDENT' : {
			const toBeEditedStudent = state.students.find(item => item.id === action.payload)

			return {
				...state,
				editMode: true,
				editableStudent: toBeEditedStudent,
				studentName: toBeEditedStudent.name
			}
		}

		case 'REMOVE_STUDENT' : {
			return {
				...state,
				students: state.students.filter(item => item.id !== action.payload)
			}
		}

		case 'UPDATE_STUDENT' : {
			return action.payload.targetProperty === 'name' ? {
				...state,
				students: state.students.map(item => {
					if (item.id === state.editableStudent.id) {
						item[action.payload.targetProperty] = action.payload.value
						// item['name'] = 'Student -1'
						// item['isPresent] === item.isPresent = false
					}
					return item
				}),
				editMode: false,
				editableStudent: null
			} : {
				...state,
				students: state.students.map(item => {
					if (item.id === action.payload.id) {
						item[action.payload.targetProperty] = action.payload.value
						// item['name'] = 'Student -1'
						// item['isPresent'] === item.isPresent = false
					}
					return item
				})
			}
		}

		// dispatch({type: 'UPDATE_STUDENT', payload: {id: '1', targetProperty: 'name', value: 'Student -1'}})

		// dispatch({type: 'UPDATE_STUDENT', payload: {id: '1', targetProperty: 'isPresent', value: true}})

		// dispatch({type: 'UPDATE_STUDENT', payload: {id: '1', targetProperty: 'isPresent', value: false}})


		// case 'UPDATE_STUDENT' : {
		// 	return {
		// 		...state,
		// 		students: state.students.map(item => {
		// 			if (item.id === action.payload.id) {
		// 				item.name = state.studentName
		// 			}
		// 			return item
		// 		})
		// 	}
		// }


		default : {
			return state
		}
	}
}