export const initialState = [
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
];


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
        default:
            return state
    }
};

