import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'

import { useSelector, useDispatch } from 'react-redux';
import { addTodoAction, toggleTodoAction,  deleteTodoAction } from '../redux/actions'
import uuid from 'uuid/v4';

import { Input, Button, List, Checkbox } from 'semantic-ui-react'


export default function Semantic (){
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
                    <Input size='large' type="text" placeholder="Enter Todo" style={{width:"100%"}} value={addtodo} onChange={evt => {setAddTodo(evt.target.value)}}/>
                    <Button primary type="submit">Submit</Button>
                </div>
            </form>

            <div className="todo-list-container">
                <List celled>
                     {
                        todoList.map( item => (
                            <List.Item>
                                <div className="list-component">
                                    <Checkbox checked={item.complete} onChange={toggleTodo.bind(null, item.id)}/>
                                    <span className={item.complete === false ? "item-list" : 'item-list complete'}>{item.name}</span>
                                    <span className="delete-button">
                                        <Button color="red" size="tiny" onClick={deleteTodo.bind(null, item.id)}>X</Button>
                                    </span>
                                </div>
                            </List.Item>
                        ))
                    }
                </List>
            </div>
        </React.Fragment>
    )
}


