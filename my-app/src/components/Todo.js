import React, {useState, useReducer } from 'react';

import { initialState, todoReducer } from '../reducers';

const Todo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div>
            {state.map(item => (
            <h1><input type="checkbox" id={item.id} checked={!!item.completed}></input> {item.item}</h1>

            ))}
        </div>
    );
};

export default Todo;