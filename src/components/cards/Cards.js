import { Col, Divider, Row } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import { Button, Card } from "react-bootstrap";
import apples from "../images/apple.jpg";

const Cards = () => {
  return (
    <>

<Divider orientation="center">
    <Title level={3}>

    All Products
    </Title>
    </Divider>
      <Card className="container my-2 text-center w-50">
        <Card.Body>
          <Divider orientation="left">Apple</Divider>
          <Row>
            <Col
              span={6}
              xs={{
                order: 1,
              }}
              sm={{
                order: 1,
              }}
              md={{
                order: 1,
              }}
              lg={{
                order: 1,
              }}
            >
              <img src={apples} width="50" />
            </Col>
            <Col
              span={6}
              xs={{
                order: 2,
              }}
              sm={{
                order: 2,
              }}
              md={{
                order: 2,
              }}
              lg={{
                order: 2,
              }}
            >
              1 Kg
            </Col>
            <Col
              span={6}
              xs={{
                order: 3,
              }}
              sm={{
                order: 3,
              }}
              md={{
                order: 3,
              }}
              lg={{
                order: 3,
              }}
            >
              Prices : 100 pkr
            </Col>
            <Col
              span={6}
              xs={{
                order: 4,
              }}
              sm={{
                order: 4,
              }}
              md={{
                order: 4,
              }}
              lg={{
                order: 4,
              }}
            >
              <Button variant="success">Add Cart</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="container my-2 text-center w-50">
        <Card.Body>
          <Divider orientation="left">Apple</Divider>
          <Row>
            <Col
              span={6}
              xs={{
                order: 1,
              }}
              sm={{
                order: 1,
              }}
              md={{
                order: 1,
              }}
              lg={{
                order: 1,
              }}
            >
              <img src={apples} width="50" />
            </Col>
            <Col
              span={6}
              xs={{
                order: 2,
              }}
              sm={{
                order: 2,
              }}
              md={{
                order: 2,
              }}
              lg={{
                order: 2,
              }}
            >
              1 Kg
            </Col>
            <Col
              span={6}
              xs={{
                order: 3,
              }}
              sm={{
                order: 3,
              }}
              md={{
                order: 3,
              }}
              lg={{
                order: 3,
              }}
            >
              Prices : 100 pkr
            </Col>
            <Col
              span={6}
              xs={{
                order: 4,
              }}
              sm={{
                order: 4,
              }}
              md={{
                order: 4,
              }}
              lg={{
                order: 4,
              }}
            >
              <Button variant="success">Add Cart</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="container my-2 text-center w-50">
        <Card.Body>
          <Divider orientation="left">Apple</Divider>
          <Row>
            <Col
              span={6}
              xs={{
                order: 1,
              }}
              sm={{
                order: 1,
              }}
              md={{
                order: 1,
              }}
              lg={{
                order: 1,
              }}
            >
              <img src={apples} width="50" />
            </Col>
            <Col
              span={6}
              xs={{
                order: 2,
              }}
              sm={{
                order: 2,
              }}
              md={{
                order: 2,
              }}
              lg={{
                order: 2,
              }}
            >
              1 Kg
            </Col>
            <Col
              span={6}
              xs={{
                order: 3,
              }}
              sm={{
                order: 3,
              }}
              md={{
                order: 3,
              }}
              lg={{
                order: 3,
              }}
            >
              Prices : 100 pkr
            </Col>
            <Col
              span={6}
              xs={{
                order: 4,
              }}
              sm={{
                order: 4,
              }}
              md={{
                order: 4,
              }}
              lg={{
                order: 4,
              }}
            >
              <Button variant="success">Add Cart</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="container my-2 text-center w-50">
        <Card.Body>
          <Divider orientation="left">Apple</Divider>
          <Row>
            <Col
              span={6}
              xs={{
                order: 1,
              }}
              sm={{
                order: 1,
              }}
              md={{
                order: 1,
              }}
              lg={{
                order: 1,
              }}
            >
              <img src={apples} width="50" />
            </Col>
            <Col
              span={6}
              xs={{
                order: 2,
              }}
              sm={{
                order: 2,
              }}
              md={{
                order: 2,
              }}
              lg={{
                order: 2,
              }}
            >
              1 Kg
            </Col>
            <Col
              span={6}
              xs={{
                order: 3,
              }}
              sm={{
                order: 3,
              }}
              md={{
                order: 3,
              }}
              lg={{
                order: 3,
              }}
            >
              Prices : 100 pkr
            </Col>
            <Col
              span={6}
              xs={{
                order: 4,
              }}
              sm={{
                order: 4,
              }}
              md={{
                order: 4,
              }}
              lg={{
                order: 4,
              }}
            >
              <Button variant="success">Add Cart</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
