import React from 'react';
import { Button, Form, Input, message, Col, Row } from "antd";
import {Link} from  'react-router-dom';
import "../resources/authentication.css";


function Register() {

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
            <h3>Register</h3>

            <Form.Item name="name" label="Name" placeholder="Enter Name">
              <Input />
            </Form.Item>

            <Form.Item name="userid" label="User ID" placeholder="Enter price">
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