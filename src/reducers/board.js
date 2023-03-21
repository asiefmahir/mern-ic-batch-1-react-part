export const boardReducer = (boards, action) => {
    switch(action.type) {
        case 'CREATE_BOARD' : {
            const newBoard = {
                id: Date.now() + '',
                title: action.payload,
                createdAt: new Date().toLocaleString(),
                lists: [],
                tasks: []
            }

            return [...boards, newBoard]
        }

        case 'UPDATE_BOARD' : {
            return boards.map(item => {
                if (item.id === action.payload.id) {
                    item.title = action.payload.title
                }

                return item
            })
        }

        case 'REMOVE_BOARD' : {
            return boards.filter(item => item.id !== action.payload)
        }

        case 'ADD_LIST_ID_TO_BOARD' : {
            return boards.map(item => {
                if (item.id === action.payload.id) {
                    item.lists.push(action.payload.listId)
                }

                return item
            })
        }

        case 'REMOVE_LIST_ID_FROM_BOARD' : {
            return boards.map(item => {
                if (item.id === action.payload.id) {
                    item.lists = item.lists.filter(item => item !== action.payload.listId)
                }

                return item
            })
        }


        case 'ADD_TASK_ID_TO_BOARD' : {
            return boards.map(item => {
                if (item.id === action.payload.id) {
                    item.tasks.push(action.payload.taskId)
                }

                return item
            })
        }

        case 'REMOVE_TASK_ID_FROM_BOARD' : {
            return boards.map(item => {
                if (item.id === action.payload.id) {
                    item.tasks = item.tasks.filter(item => item !== action.payload.taskId)
                }

                return item
            })
        }



        default : {
            return boards
        }
    }
}


/**
 * boards = [
 *      {
 *          id: Date.now() + '',
 *          title: 'board-1',
 *          createdAt: new Date(),
 *          lists: ['list1', 'list2'],
 *          tasks: ['task-1', 'task-2']
 *      }
 * 
 * ]
 */