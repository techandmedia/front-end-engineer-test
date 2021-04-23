import React from "react";
import { Col } from "antd";
import { CardRowDescription } from "./card-row-description";

export function CardHolderName() {
  return (
    <CardRowDescription>
      <Col span={14}>cardholder name</Col>
      <Col span={10}>expiration</Col>
    </CardRowDescription>
  );
}
