import React, { useState } from 'react';
import 'antd/dist/antd.css';

import { useSelector, useDispatch } from 'react-redux';
import { addTodoAction, toggleTodoAction,  deleteTodoAction } from '../redux/actions'
import uuid from 'uuid/v4';

import { Form, Input, Button, List, Checkbox  } from 'antd';
import { DeleteFilled } from '@ant-design/icons';



export default function  Antd () {

    const todoList = useSelector((state) => state.todos),
          dispatch = useDispatch();

    const [addtodo, setAddTodo] = useState('');      

    const addTodo = (todo) => dispatch(addTodoAction(todo));
    const toggleTodo = (todoId) => dispatch(toggleTodoAction(todoId));
    const deleteTodo = (todoId) => dispatch(deleteTodoAction(todoId));

    const onSubmitTodo = () => {
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
            <Form onFinish={onSubmitTodo} className="form-container">
                <div className="form-component"> 
                    <Input size="large" placeholder="Enter Task" value={addtodo} onChange={evt => {setAddTodo(evt.target.value)}}/>
                    <Button type="primary" size="large" htmlType="submit">Submit</Button>
                </div>
            </Form>

            <div className="todo-list-container">
                <List 
                    bordered
                    dataSource={todoList}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                title={
                                    <div className="list-component">
                                        <Checkbox checked={item.complete} onChange={toggleTodo.bind(null, item.id)}/>
                                        <span className={item.complete === false ? "item-list" : 'item-list complete'}>{item.name}</span>
                                        <span className="delete-button">
                                            <Button type="primary" icon={<DeleteFilled />} size="default" onClick={deleteTodo.bind(null, item.id)} danger/>
                                        </span>
                                    </div>
                                }
                            />
                      </List.Item>
                    )}
                />
            </div>
        </React.Fragment>
    )
}


