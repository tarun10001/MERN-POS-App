import React, { useEffect } from 'react';
import { Button, Form, Input, message, Col, Row } from "antd";
import {Link, useNavigate} from  'react-router-dom';
import "../resources/authentication.css";
import axios from 'axios';
import { useDispatch } from 'react-redux';


function Register() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

    const onFinish = (values) => {
      dispatch({type: 'showLoading'})
        axios.post('/api/users/register', values).then((res) => {
      dispatch({type: 'hideLoading'})          
          message.success("Registration successfull, please wait for verification")
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
            <h3>Register</h3>

            <Form.Item name="name" label="Name" placeholder="Enter Name">
              <Input />
            </Form.Item>

            <Form.Item name="userId" label="User ID" placeholder="Enter price">
              <Input />
            </Form.Item>

            <Form.Item name="password" label="Password" placeholder="URL address">
              <Input type="password" />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/login">Already Registered ? Click here to Login</Link>
              <Button htmlType="submit" type="primary">
                REGISTER
              </Button>
            </div>
          </Form>
          </Col>
          </Row>
    </div>
  )
};


export default Register;