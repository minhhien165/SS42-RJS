import React from "react";
import { Form, InputGroup } from "react-bootstrap";

export default function Bt2() {
  return (
    <div>
      Bt2
      <InputGroup size="sm" className="mb-3">
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="small input"
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="medium input"
        />
      </InputGroup>
      <br />
      <InputGroup size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="lange input"
        />
      </InputGroup>
      <hr />
    </div>
  );
}
