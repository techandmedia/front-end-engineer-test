import React, { useState } from "react";
import { Form, Card, Input, Row, Col } from "antd";
import { CardLogo } from "../components/card-details-1";
import { CardNumber } from "../components/card-details-2";
import { CardHolderName } from "../components/card-details-3";
import { createAStringOfNumber, createExpiration } from "../utils/helpers";

export default function Home() {
  const [cardNumber, setCardNumber] = useState("xxxx xxxx xxxx xxxx xxxx");
  const [cardName, setCardName] = useState("xxxxx xxxxx");
  const [cardExpiration, setCardExpiration] = useState("xx/xx");

  function onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  }
  function onFinish(value) {
    console.log("value", value);
  }

  function onNameChange(e) {
    const name = e.target.value;
    // If name change
    setCardName(name);

    // Change the card number
    const newNumber = parseInt(name.replace(/^#/, ""), 10);
    const blockOfNumber = createAStringOfNumber(newNumber);
    setCardNumber(blockOfNumber);

    // Change the expiration date
    const exp = createExpiration(newNumber);
    setCardExpiration(exp);
  }

  return (
    <div className="site-card-border-less-wrapper">
      <Row gutter={12}>
        <Col span={12}>
          <div className="credit-card">
            <CardLogo cardNumber={cardNumber} />
            <CardNumber cardNumber={cardNumber} />
            <CardHolderName
              cardName={cardName}
              cardExpiration={cardExpiration}
            />
          </div>
        </Col>
        <Col span={12}>
          <Card bordered={false} style={{ width: 500 }}>
            <Form
              layout="vertical"
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input maxLength={11} onChange={(e) => onNameChange(e)} />
              </Form.Item>

              <Form.Item
                label="Card Number"
                name="card"
                rules={[
                  { required: true, message: "Please input your card number!" },
                ]}
              >
                <div
                  style={{
                    border: "1px solid grey",
                    padding: 4,
                    borderRadius: 2,
                    paddingLeft: 12,
                  }}
                >
                  {cardNumber}
                </div>
              </Form.Item>

              <Row gutter={12}>
                <Col span={12}>
                  <Form.Item
                    label="Expiration (mm/yy)"
                    name="card"
                    rules={[
                      {
                        required: true,
                        message: "Please input your expiration date!",
                      },
                    ]}
                  >
                    <div
                      style={{
                        border: "1px solid grey",
                        padding: 4,
                        borderRadius: 2,
                        paddingLeft: 12,
                      }}
                    >
                      {cardExpiration}
                    </div>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    label="Security Code"
                    name="card"
                    rules={[
                      {
                        required: true,
                        message: "Please input your security code!",
                      },
                    ]}
                  >
                    <Input.Password maxLength={3} />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
