import React, {useState, useReducer, useEffect } from 'react';

import { initialState, todoReducer } from '../reducers';

const Todo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newTodo, setNewTodo] = useState('');

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };


    const handleUpdateTodo = e => {
        dispatch({ type: "UPDATE_TODO", payload: newTodo });
        setNewTodo('');
    };

    const handleUpdateClear = e => {
        dispatch({ type: "CLEAR_TODO" });
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
            <button onClick={handleUpdateClear}>Clear complete</button>

            {console.log('Todo state', state)}

            {state.todos.map(todo => (<h1><input type="checkbox" id={todo.id} checked={todo.completed} onChange={() => dispatch({ type: 'TOGGLE_COMPLETE', payload: todo.id })}></input> {todo.item}</h1>))}
        </div>
    );
};

export default Todo;