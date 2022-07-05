import React from 'react';
import { Button, Form, Input, message, Col, Row } from "antd";
import {Link, useNavigate} from  'react-router-dom';
import "../resources/authentication.css";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';


function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = (values) => {
        dispatch({type: 'showLoading'})
          axios.post('/api/users/login', values).then((res) => {
        dispatch({type: 'hideLoading'})          
            message.success("Login successfull")
            localStorage.setItem('pos-user', JSON.stringify(res.data))
          navigate('/home')
          }).catch(() => {
        dispatch({type: 'hideLoading'})
            message.error("Something went wrong")
          })
      }

      useEffect(() => {
        if (localStorage.getItem('pos-user')) {
        navigate('/home')
        }
      }, [])

  return (
    <div className="authentication">
        <Row>
            <Col lg={8} xs ={22}>
        <Form
            layout="vertical"
            onFinish={onFinish}
          >
            <h1><b>TK MART</b></h1>
            <hr />
            <h3>Login</h3>

            <Form.Item name="userId" label="User ID">
              <Input />
            </Form.Item>

            <Form.Item name="password" label="Password">
              <Input type="password" />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/register">Not Yet Registered ? Click here to Register</Link>
              <Button htmlType="submit" type="primary">
                LOGIN
              </Button>
            </div>
          </Form>
          </Col>
          </Row>
    </div>
  )
};


export default Login;