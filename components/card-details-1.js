import React from "react";
import { Col } from "antd";
import { CardRowDescription } from "./card-row-description";

export function CardLogo() {
  return (
    <CardRowDescription>
      <Col span={8}>LOGO 1</Col>
      <Col span={8} offset={8}>
        <div
          style={{
            // border: "1px solid red",
            position: "absolute",
            right: "0px",
          }}
        >
          LOGO 2
        </div>
      </Col>
    </CardRowDescription>
  );
}
