export const listReducer = (lists, action) => {
    console.log(" Iam from list reducer");
    switch(action.type) {
        case 'CREATE_LIST' : {
            console.log("I am from create action");
            const newList = {
                id: action.payload.id,
                title: action.payload.title,
                boardId: action.payload.boardId,
                tasks: []
            }

            return [...lists, newList]
        }

        case 'UPDATE_LIST' : {
            return lists.map(item => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title
                }

                return item
            })
        }

        case 'REMOVE_LIST' : {
            return lists.filter(item => item.id !== action.payload)
        }

        case 'ADD_TASK_ID_TO_LIST' : {
            return lists.map(item => {
                if (item.id === action.payload.id) {
                    item.tasks.push(action.payload.taskId)
                }

                return item
            })
        }

        case 'REMOVE_TASK_ID_FROM_LIST' : {
            return lists.map(item => {
                if (item.id === action.payload.id) {
                    item.tasks = item.tasks.filter(item => item !== action.payload.taskId)
                }

                return item
            })
        }

        default : {
            return lists
        }
    }
}


/**
 * lists = [
 *      {
 *          id: Date.now() + '',
 *          title: 'List-1',
 *          boardId: 'Board-1',
 *          tasks: ['task-1', 'task-2']
 *      }
 * 
 * ]
 * 
 */