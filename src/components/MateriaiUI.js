import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addTodoAction, toggleTodoAction,  deleteTodoAction } from '../redux/actions'
import uuid from 'uuid/v4';


import { TextField, Button, List, ListItemIcon, Checkbox, ListItem, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


export default function MaterialUI (){
    const todoList = useSelector((state) => state.todos),
    dispatch = useDispatch();

    const [addtodo, setAddTodo] = useState('');      

    const addTodo = (todo) => dispatch(addTodoAction(todo));
    const toggleTodo = (todoId) => dispatch(toggleTodoAction(todoId));
    const deleteTodo = (todoId) => dispatch(deleteTodoAction(todoId));

    const onSubmitTodo = evt => {
         evt.preventDefault();

        if(addtodo.trim() === '') return;

        addTodo({
            id:uuid(),
            name:addtodo,
            complete:false
        });

        setAddTodo('');
    }
    return (
        <React.Fragment>
            <form onSubmit={onSubmitTodo} className="form-container">
                <div className="form-component"> 
                    <TextField label="Enter Todo" variant="outlined" fullWidth value={addtodo} onChange={evt => {setAddTodo(evt.target.value)}}/>
                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                </div>
            </form>

            <div className="todo-list-container">
                <List>
                     {
                        todoList.map( (item, num) => {
                            return (
                                <ListItem>
                                    <ListItemIcon>
                                        <Checkbox 
                                            edge="start"
                                            checked={item.complete}
                                            onChange={toggleTodo.bind(null, item.id)}
                                            tabIndex={-1}
                                            disableRipple
                                        />
                                    </ListItemIcon>
                                    <span className={item.complete === false ? "item-list" : 'item-list complete'}>{item.name}</span>
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="comments" onClick={deleteTodo.bind(null, item.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )
                        })
                    }
                   
                </List>
            </div>
        </React.Fragment>
    )
}


