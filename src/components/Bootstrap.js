import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useSelector, useDispatch } from 'react-redux';
import { addTodoAction, toggleTodoAction,  deleteTodoAction } from '../redux/actions'
import uuid from 'uuid/v4';

import { Form, Input ,Button, ListGroup, ListGroupItem } from 'reactstrap';


export default function  Bootstrap () {
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
            <Form onSubmit={onSubmitTodo} className="form-container">
                <div className="form-component"> 
                    <Input type="text" bsSize="lg" placeholder="Enter Task" value={addtodo} onChange={evt => {setAddTodo(evt.target.value)}}/>
                    <Button color="primary" size="lg" type="submit">Submit</Button>
                </div>
            </Form>

            <div className="todo-list-container">
                <ListGroup>
                    {
                        todoList.map( item => (
                            <ListGroupItem>
                                <div className="list-component">
                                    <Input type="checkbox" className="checkbox" checked={item.complete} onChange={toggleTodo.bind(null, item.id)}/>
                                    <span className={item.complete === false ? "item-list" : 'item-list complete'}>{item.name}</span>
                                    <span className="delete-button">
                                        <Button color="danger" size="sm" onClick={deleteTodo.bind(null, item.id)}>X</Button>
                                    </span>
                                </div>
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
            </div>
        </React.Fragment>
    )
}


