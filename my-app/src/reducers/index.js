export const initialState = {
todos:[
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {    
    item: 'Learn about initialState',
    completed: true,
    id: 3892987581
    }
]
};



export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TODO':
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ]
        case 'TOGGLE_COMPLETE':
            return {
            todos: state.todos.map(todo => {
                console.log('all', todo.id, action.payload);
                if (Number(action.payload) === todo.id) {
                    console.log('found, changing to', !todo.completed)
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } else {
                    console.log('else state', state);
                    return state
                }

            })
        }
        default:
            return state
    };
};

