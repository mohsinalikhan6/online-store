import { Button, Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
import apples from '../images/apple.jpg'

const ShoppingCart = () => {
  return (
    <>
      <Row className="App">
        <Col span={12}>
            <Title level={3}>
                ShoppingCart
            </Title>
        </Col>
      </Row>
      <Row className="App">
        <Col span={6}>
            <img src={apples} width='50' />
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
            </Col>
      </Row>
      
    </>
  );
};

export default ShoppingCart;
