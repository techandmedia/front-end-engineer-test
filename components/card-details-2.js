import React from "react";
import { Col } from "antd";
import { CardRowDescription } from "./card-row-description";

export function CardNumber({ cardNumber }) {
  return (
    <CardRowDescription>
      <Col>
        <p>Card Number</p>
        <p style={{ marginTop: "-20px", fontSize: 30 }}>{cardNumber}</p>
      </Col>
    </CardRowDescription>
  );
}
