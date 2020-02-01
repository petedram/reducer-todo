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
    return {
        state
    };
};

