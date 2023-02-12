import { Button, Form, Input } from "antd";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginForm = () => {
    const { email, password } = data;
    if (data.email === "admin@gmail.com" && data.password === "admin123") {
      navigate("/adminScreen");
    } else {
      navigate("/adminScreen");
    }
  };

  return (
    <>
      <Container>
        <Title>Login Page</Title>
        <Form>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
        <Button onClick={loginForm}>Login</Button>
      </Container>
    </>
  );
};

export default Login;
