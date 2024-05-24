import { faHandsClapping } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Nav } from "react-bootstrap";

export default function Bt8() {
  const [tab, setTab] = useState<number>(1);

  let handleClick = (tab: number) => {
    setTab(tab);
  };

  return (
    <div>
      Bt8
      <Nav variant="tabs" defaultActiveKey="default">
        <Nav.Item onClick={() => handleClick(1)}>
          <Nav.Link eventKey="default" id="1">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => handleClick(2)}>
          <Nav.Link id="2">Introduce</Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => handleClick(3)}>
          <Nav.Link id="3">Contact</Nav.Link>
        </Nav.Item>
      </Nav>

      <p>
        {tab === 1 ? (
          <h1>Tab 1</h1>
        ) : tab === 2 ? (
          <h1>Tab 2</h1>
        ) : (
          <h1>Tab 3</h1>
        )}
      </p>

      <hr />
    </div>
  );
}
