import React from "react";
import { Spinner } from "react-bootstrap";

export default function Bt6() {
  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      Bt6
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
      <hr />
    </div>
  );
}
