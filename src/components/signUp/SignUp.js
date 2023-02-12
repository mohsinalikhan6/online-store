import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { Container } from "react-bootstrap";
import Title from "antd/es/typography/Title";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const SignUp = () => {
  const navigate = useNavigate();
  
  
  
  const PostData = async (e) => {
    e.preventDefault()

    const { username, email, contact, password} = data;

    const res = await fetch("https://online-store786-default-rtdb.firebaseio.com/signUp.json",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          email,
          contact,
          password,
        })
      })
      if(res){
        alert("Sign Up Successfully")
         setData({
           username:"",
           email:"",
           contact:"",
           password:"",
         })
         navigate("/login");
      }else{
        alert("Plz Fill the Data");
      }
  }

  const [data, setData] = useState({
    username: "",
    email: "",
    contact: "",
    password: "",
  })

  // const [data, setData] = useState({

  // });

  let name, value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setData({ ...data, [name]: value });
  };

  const onFinish = (values) => {
    // <Link to="/login/"></Link>;
    console.log("Success:", values);
  };

  return (
    <div className="container">
      <Container>
        <Title> SignUp Page</Title>
        <div className="form-container">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                placeholder="Username"
                className="inputs"
                name="username"
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                placeholder="Email"
                className="inputs"
                name="email"
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              name="contact"
              rules={[
                {
                  required: true,
                  message: "Please input your Contact!",
                },
              ]}
            >
              <Input
                placeholder="Contact"
                className="inputs"
                name="contact"
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                placeholder="password"
                className="inputs"
                name="password"
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <a href=" ">
                <Button
                  className="sign-up-btn"
                  htmlType="submit"
                  // onClick={SignUp}
                  onClick={PostData}
                >
                  {/* <Navigate to="/login" /> */}
                  Sign Up
                </Button>
              </a>
            </Form.Item>
          </Form>
        </div>
      </Container>
      <div className="already-have-an-account">
        <Link to="/login/" className="already-account">
          Already have an Account ?
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
