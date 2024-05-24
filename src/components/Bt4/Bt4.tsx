import React from "react";
import { Dropdown } from "react-bootstrap";

export default function Bt4() {
  return (
    <div>
      Bt4
      <Dropdown>
        <Dropdown.Toggle
          variant=""
          id="dropdown-basic"
          style={{ border: "2px solid gray" }}
        >
          Nguyễn Minh Hiển
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Cài mật khẩu</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Đổi mật khẩu</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Đăng xuất</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <hr />
    </div>
  );
}
