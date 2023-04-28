export const ourMiddleWare = (store) => (next) => async (action) => {
    // We are blocking actions from reaching out to reducers
    console.log('our action', action);
    // console.log(store, 'store');

    if (typeof action === 'function') {
        action(store);
        return
    }

    if (action.type === 'fake/todos') {
        
        
    }

    if (action.type === 'fake/post') {
        
    }

    // pass the action to reducer
    next(action);
}


export const fetchTodo = async (store) => {
    store.dispatch({type: 'todo/fetchStart'});
        try {
           const response = await fetch(`https://jsonplaceholder.typicodsasase.com/todos?_limit=6`);
           const data = await response.json();
           store.dispatch({type: 'todo/fetchSucceeded', payload: data});
           return
        }
         catch(err) {
            store.dispatch({type: 'todo/fetchFailed', payload: err.message});
            return
         }
}

const fetchPost = async (store) => {
    store.dispatch({type: 'post/fetchStart'});
        try {
           const response = await fetch(`https://jsonplaceholder.typicodsasase.com/posts?_limit=12`);
           const data = await response.json();
           store.dispatch({type: 'post/fetchSucceeded', payload: data});
           return
        }
         catch(err) {
            store.dispatch({type: 'post/fetchFailed', payload: err.message});
            return
         }
}



// action -> String, Object, Function