import { Button, Col, Divider, Input, Row } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { AiFillSetting } from "react-icons/ai";
import avatars from "../images/avatar.png";
import { Form, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import apple from "../images/apple.jpg";
import { Card } from "react-bootstrap";

const AdminSetting = () => {
  return (
    <>
      <div className="container App">
        <Title>
          Setting <AiFillSetting />
        </Title>
        <img src={avatars} width="100" />
        <Input placeholder="Update Full Name" className="my-4" />
        <Button>Update Name</Button>
        <Divider />
        <Form.Item label="Add Image" valuePropName="fileList" className="my-4">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Add Image
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Divider />

        <Input placeholder="Update New Category" className="my-4" />
        <Button>Update Category</Button>
        <Divider />
        <Card>
          <Card.Body>
            <Card.Title>Apple</Card.Title>
            <Card.Text>
              Price : 100 Pkr
              <img src={apple} width="50" />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default AdminSetting;
