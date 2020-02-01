import React, {useState, useReducer, useEffect } from 'react';

import { initialState, todoReducer } from '../reducers';

const Todo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newTodo, setNewTodo] = useState('');

    const handleChanges = e => {
        setNewTodo(e.target.value);
        console.log(newTodo);
    };

    const handleUpdateTodo = e => {
        dispatch({ type: "UPDATE_TODO", payload: newTodo });
        setNewTodo('');
    };

    // const handleToggle = e => {
    //     dispatch({ type: 'TOGGLE_COMPLETE', payload: e.target.id });
    //     console.log(e.target.id);
    //     console.log('new state from toggle', state);
    // };


    console.log('checking state', state);
    return (
        <div>
            <input
                className='todo-input'
                type='text'
                name='newTodoText'
                value={newTodo}
                onChange={handleChanges}
            />
            <button onClick={handleUpdateTodo}>Add Todo</button>
            {console.log(state)}

            {state.map(item => (<h1><input type="checkbox" id={item.id} checked={item.completed} onChange={() => dispatch({ type: 'TOGGLE_COMPLETE', payload: item.id })}></input> {item.item}</h1>))}
        </div>
    );
};

export default Todo;