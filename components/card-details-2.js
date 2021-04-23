import React from "react";
import { Col } from "antd";
import { CardRowDescription } from "./card-row-description";

export function CardNumber() {
  return (
    <CardRowDescription>
      <Col>
        <p>Card Number</p>
        <p style={{ marginTop: "-10px" }}>'testing'</p>
      </Col>
    </CardRowDescription>
  );
}
