import React from 'react'
import { Button, Form, Input } from 'antd';
import { Col, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addtodo, /*changeInput*/ deletetodo, editTodo } from '../slices/todoslice';
import { useState } from 'react';
import { Divider, List, Typography } from 'antd';
import { uid } from 'uid';
function Todo() {
    const todostate = useSelector(state => state.todoReducer);
    console.log(todostate);
    const [state, setState] = useState();
    const dispatch = useDispatch();
    const handleChange = (event) => {
        // dispatch(changeInput(event.target.value));
        setState(event.target.value);
    }
    const handleSubmit = () => {

        dispatch(addtodo({ data: state, id: uid() }));
    }
    const handleDelete = (id) => {
        debugger
        dispatch(deletetodo(id));
    }
    const handleEdit = () => {
        dispatch(editTodo())
    }
    return (
        <div style={{ marginTop: "200px" }}>
            <Form>
                <Row>
                    <Col span={6} offset={8}>
                        <Input placeholder='Enter' onChange={handleChange} />
                        <Button type='primary' style={{ marginTop: "20px" }} onClick={handleSubmit}>Add Todo</Button>
                    </Col>

                </Row>




            </Form>

            <Divider orientation="left">List</Divider>
            <List

                bordered
                dataSource={todostate.list}
                renderItem={(item) => (
                    <List.Item>
                        <Typography.Text mark></Typography.Text> {item.data}
                        <Button type='primary' danger onClick={() => handleDelete(item.id)}>Delete</Button>
                        <Button type='primary' onClick={handleEdit}>Edit</Button>
                    </List.Item>
                )}
            />

        </div>
    )
}

export default Todo