import React from "react";
import { Col } from "antd";
import { CardRowDescription } from "./card-row-description";

const style = { marginTop: "-10px" };

export function CardHolderName({ cardName, cardExpiration }) {
  return (
    <CardRowDescription>
      <Col span={14}>
        <p>cardholder name</p>
        <p style={style}>{cardName.toUpperCase()}</p>
      </Col>
      <Col span={10}>
        <p>expiration</p>
        <p style={style}>{cardExpiration}</p>
      </Col>
    </CardRowDescription>
  );
}
