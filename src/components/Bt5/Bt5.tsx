import React from "react";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function Bt5() {
  return (
    <div>
      Bt5
      {[
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ].map((variant) => (
        <Alert
          key={variant}
          variant={variant}
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <div>This is a {variant} alert—check it out! </div>
          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        </Alert>
      ))}
      <hr />
    </div>
  );
}
