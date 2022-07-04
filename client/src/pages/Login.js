import React from 'react';
import { Button, Form, Input, message, Col, Row } from "antd";
import {Link} from  'react-router-dom';
import "../resources/authentication.css";


function Login() {

    const onFinish = (values) => {
        console.log(values);
    }
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

            <Form.Item name="userid" label="User ID">
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