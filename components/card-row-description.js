import React from "react";
import { Row } from "antd";

export function CardRowDescription({ children }) {
  return <Row style={{ height: 80 }}>{children}</Row>;
}
