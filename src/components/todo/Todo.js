import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import SomeComponent from '../SomeComponent'
import { loadTodo, clearTodo } from '../../Actions/Actions';

export const Todo = () => {
    const todo = useSelector(state => state.todo);
    const [something, setSomething] = useState(1);
    const dispatch = useDispatch();
    return (
        <>
        <Button variant="contained" color="primary" onClick={() => setSomething(something + 1)}>
            change State Of Todo
        </Button>
        {something}
        <SomeComponent />
            <Button variant="contained" color="primary" onClick={() => dispatch(loadTodo())}>
                Make api call
            </Button>
            <Button variant="contained" color="primary" onClick={() => dispatch(clearTodo())}>
                Clear State
            </Button>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            TODO:
            <div>&nbsp;</div>
            {todo && <div>
                <div>
                    <TextField
                        label='Id'
                        value={todo.id}
                    />
                </div>
                <div>
                    <TextField
                        label='User Id'
                        value={todo.userId}
                    />
                </div>
                <div>
                    <TextField
                        label='Title'
                        value={todo.title}
                    />
                </div>
                {/* <div>
                    <TextField
                        label='Urgent'
                        value={todo.urgent}
                    />
                </div> */}
            </div>}
        </> 
    );
}

export const todoRoutePath = '/app/todo';
