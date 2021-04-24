import React, { useEffect, useState } from "react";
import { Col } from "antd";
import { CardRowDescription } from "./card-row-description";

export function CardLogo({ cardNumber }) {
  const [logo, setLogo] = useState("Master");

  useEffect(() => {
    if (parseInt(cardNumber.charAt(0)) % 2) {
      setLogo("Master");
    } else {
      setLogo("Visa");
    }
  }, [cardNumber]);

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
          {logo === "Master" ? "Master Card" : "Visa Card"}
        </div>
      </Col>
    </CardRowDescription>
  );
}
