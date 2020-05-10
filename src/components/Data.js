import React from "react";
import styled from "styled-components";
import { Title } from "../styles";
import { Form, Input, Button, InputNumber, Row, Col } from "antd";

const Container = styled.div``;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  size: "large"
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

const Data = () => (
  <Container>
    <Title>Data</Title>
    <Form {...layout} name="basic" initialValues={{ remember: true }}>
      <Row>
        <Col>
          <Form.Item label="InputNumber">
            <InputNumber />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label="InputNumber">
            <InputNumber />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Item label="InputNumber">
            <InputNumber />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item label="InputNumber">
            <InputNumber />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Form>

    {/* --underlineScaleX: 1;
  --underlineColor: #ffc600;
  --underlineHeight: 5px;
  --underlineBottom: 1px;
  --underlineScaleHover: 1.05;
  --underlineRotation: -2deg; */}
  </Container>
);

export default Data;
