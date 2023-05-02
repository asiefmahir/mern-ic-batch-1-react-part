// export const ourMiddleWare = (store) => (next) => async (action) => {
//     // We are blocking actions from reaching out to reducers
//     console.log('our action', action);
//     if (typeof action === 'function') {
//         action(store);
//         return
//     }


//     // pass the action to reducer
//     next(action);
// }


export const fetchTodo = async (dispatch) => {
    dispatch({type: 'todo/fetchStart'});
        try {
           const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=6`);
           const data = await response.json();
           dispatch({type: 'todo/fetchSucceeded', payload: data});
           return
        }
         catch(err) {
            dispatch({type: 'todo/fetchFailed', payload: err.message});
            return
         }
}

export const fetchPost = async (dispatch) => {
    dispatch({type: 'post/fetchStart'});
        try {
           const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=12`);
           const data = await response.json();
           dispatch({type: 'post/fetchSucceeded', payload: data});
           return
        }
         catch(err) {
            dispatch({type: 'post/fetchFailed', payload: err.message});
            return
         }
}



// action -> String, Object, Function